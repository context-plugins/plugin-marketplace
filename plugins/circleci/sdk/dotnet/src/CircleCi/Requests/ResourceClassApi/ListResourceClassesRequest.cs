namespace CircleCi.Requests.ResourceClassApi;

/// <summary>
/// The inputs of the ListResourceClasses operation.
/// </summary>
public sealed record ListResourceClassesRequest
{
    /// <summary>
    /// The namespace to list resource classes for
    /// </summary>
    public required string Namespace { get; init; }
}
