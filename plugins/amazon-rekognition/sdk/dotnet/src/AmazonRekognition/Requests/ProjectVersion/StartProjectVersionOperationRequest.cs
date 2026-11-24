using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectVersion;

/// <summary>
/// The inputs of the StartProjectVersion operation.
/// </summary>
public sealed record StartProjectVersionOperationRequest
{
    public required XAmzTarget3AmazonRekognitionProjectVersionApi XAmzTarget { get; init; }
}
