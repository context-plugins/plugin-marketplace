namespace DoiT.Requests.Annotations;

/// <summary>
/// The inputs of the GetAnnotation operation.
/// </summary>
public sealed record GetAnnotationRequest
{
    /// <summary>
    /// Annotation ID
    /// </summary>
    public required string Id { get; init; }
}
