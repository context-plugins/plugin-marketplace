namespace ApiVerve.Requests.Entertainment;

/// <summary>
/// The inputs of the Dndgenerator operation.
/// </summary>
public sealed record DndgeneratorRequest
{
    /// <summary>
    /// Content type to generate
    /// </summary>
    public string? Type { get; init; }

    /// <summary>
    /// Number of items to generate
    /// </summary>
    public int? Count { get; init; }
}
