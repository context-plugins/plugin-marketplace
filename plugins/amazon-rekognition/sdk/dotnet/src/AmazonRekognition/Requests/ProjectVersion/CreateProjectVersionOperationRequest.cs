using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectVersion;

/// <summary>
/// The inputs of the CreateProjectVersion operation.
/// </summary>
public sealed record CreateProjectVersionOperationRequest
{
    public required XAmzTargetAmazonRekognitionProjectVersionApi XAmzTarget { get; init; }
}
