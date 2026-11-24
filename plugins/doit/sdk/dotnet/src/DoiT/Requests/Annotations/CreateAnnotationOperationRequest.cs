using DoiT.Models;

namespace DoiT.Requests.Annotations;

/// <summary>
/// The inputs of the CreateAnnotation operation.
/// </summary>
public sealed record CreateAnnotationOperationRequest
{
    public required CreateAnnotationRequest Body { get; init; }
}
