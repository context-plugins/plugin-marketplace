namespace ApiVerve.Requests.Food;

/// <summary>
/// The inputs of the Nutrition operation.
/// </summary>
public sealed record NutritionRequest
{
    /// <summary>
    /// Name of the food to look up (e.g. banana, chicken breast, olive oil)
    /// </summary>
    public required string Food { get; init; }

    /// <summary>
    /// Serving weight in grams to scale the nutrition panel to. Defaults to a per-100-gram basis.
    /// </summary>
    public double? Grams { get; init; }
}
