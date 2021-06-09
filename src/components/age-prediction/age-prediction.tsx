import { Component, Host, h, State } from "@stencil/core";
import { predictAge } from "../../api/agify";

@Component({
  tag: "age-prediction",
  styleUrl: "age-prediction.css",
  shadow: true,
})
export class AgePrediction {
  @State() name?: string;

  @State() age: number | null | undefined;

  private async handlePredictAge() {
    if (this.name) {
      this.age = await predictAge(this.name, "DE");
    }
  }

  render() {
    return (
      <Host>
        <span class="title">Predicting a person's age from their name</span>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.handlePredictAge();
          }}
        >
          <input
            type="text"
            name="name"
            aria-label="Name"
            placeholder="Name"
            autoComplete="off"
            value={this.name}
            onInput={(event: any) => {
              this.name = event.target.value;
            }}
          />
          <input type="submit" value="Predict" />
        </form>
        <hr />
        <div class="result">
          <span class="label">Predicted Age</span>
          <span class="age">{this.age ?? "?"}</span>
        </div>
      </Host>
    );
  }
}
