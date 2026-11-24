namespace DoiT.Requests.Annotations;

/// <summary>
/// The inputs of the DeleteAnnotation operation.
/// </summary>
public sealed record DeleteAnnotationRequest
{
    /// <summary>
    /// Annotation ID
    /// </summary>
    public required string Id { get; init; }
}
