namespace ApiVerve.Requests.DataGeneration;

/// <summary>
/// The inputs of the Bingocardgenerator operation.
/// </summary>
public sealed record BingocardgeneratorRequest
{
    /// <summary>
    /// Card size (3x3 to 10x10)
    /// </summary>
    public int? Size { get; init; }

    /// <summary>
    /// Include free space in center
    /// </summary>
    public bool? FreeSpace { get; init; }

    /// <summary>
    /// Set to true to generate a downloadable bingo card image
    /// </summary>
    public bool? Image { get; init; }
}
