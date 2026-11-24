namespace ApiVerve.Requests.MathCalculations;

/// <summary>
/// The inputs of the Colorsimilarity operation.
/// </summary>
public sealed record ColorsimilarityRequest
{
    /// <summary>
    /// First hex color value (with or without # prefix)
    /// </summary>
    public required string Color1 { get; init; }

    /// <summary>
    /// Second hex color value (with or without # prefix)
    /// </summary>
    public required string Color2 { get; init; }
}
