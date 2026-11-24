using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Project;

/// <summary>
/// The inputs of the DeleteProject operation.
/// </summary>
public sealed record DeleteProjectOperationRequest
{
    public required XAmzTarget1AmazonRekognitionProjectApi XAmzTarget { get; init; }
}
