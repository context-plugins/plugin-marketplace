namespace ApiVerve.Requests.Food;

/// <summary>
/// The inputs of the Cocktail operation.
/// </summary>
public sealed record CocktailRequest
{
    /// <summary>
    /// The name of the cocktail for which you want to get the recipe (e.g., martini)
    /// </summary>
    public required string Name { get; init; }
}
