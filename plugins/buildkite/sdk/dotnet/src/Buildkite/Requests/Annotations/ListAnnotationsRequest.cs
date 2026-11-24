namespace Buildkite.Requests.Annotations;

/// <summary>
/// The inputs of the ListAnnotations operation.
/// </summary>
public sealed record ListAnnotationsRequest
{
    /// <summary>
    /// Organization slug
    /// </summary>
    public required string Org { get; init; }

    /// <summary>
    /// Pipeline slug
    /// </summary>
    public required string Pipeline { get; init; }

    /// <summary>
    /// Build number
    /// </summary>
    public required int Number { get; init; }
}
