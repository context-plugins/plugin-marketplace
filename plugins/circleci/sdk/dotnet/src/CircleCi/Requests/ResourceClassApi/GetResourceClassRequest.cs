namespace CircleCi.Requests.ResourceClassApi;

/// <summary>
/// The inputs of the GetResourceClass operation.
/// </summary>
public sealed record GetResourceClassRequest
{
    /// <summary>
    /// The resource class in namespace/name format
    /// </summary>
    public required string ResourceClass { get; init; }
}
