using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectVersion;

/// <summary>
/// The inputs of the DeleteProjectVersion operation.
/// </summary>
public sealed record DeleteProjectVersionOperationRequest
{
    public required XAmzTarget1AmazonRekognitionProjectVersionApi XAmzTarget { get; init; }
}
