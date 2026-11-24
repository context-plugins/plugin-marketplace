using DoiT.Models;

namespace DoiT.Requests.Annotations;

/// <summary>
/// The inputs of the UpdateAnnotation operation.
/// </summary>
public sealed record UpdateAnnotationOperationRequest
{
    /// <summary>
    /// Annotation ID
    /// </summary>
    public required string Id { get; init; }

    public UpdateAnnotationRequest? Body { get; init; }
}
