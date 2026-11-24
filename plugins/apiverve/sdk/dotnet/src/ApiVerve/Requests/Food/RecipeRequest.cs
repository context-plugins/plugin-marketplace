namespace ApiVerve.Requests.Food;

/// <summary>
/// The inputs of the Recipe operation.
/// </summary>
public sealed record RecipeRequest
{
    /// <summary>
    /// The name or description of the recipe you want to generate
    /// </summary>
    public required string Name { get; init; }
}
