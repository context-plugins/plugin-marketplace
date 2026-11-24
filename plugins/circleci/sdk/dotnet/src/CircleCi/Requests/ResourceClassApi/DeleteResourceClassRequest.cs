namespace CircleCi.Requests.ResourceClassApi;

/// <summary>
/// The inputs of the DeleteResourceClass operation.
/// </summary>
public sealed record DeleteResourceClassRequest
{
    /// <summary>
    /// The resource class in namespace/name format
    /// </summary>
    public required string ResourceClass { get; init; }
}
