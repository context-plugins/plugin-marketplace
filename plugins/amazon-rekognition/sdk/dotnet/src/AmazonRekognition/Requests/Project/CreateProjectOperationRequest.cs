using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Project;

/// <summary>
/// The inputs of the CreateProject operation.
/// </summary>
public sealed record CreateProjectOperationRequest
{
    public required XAmzTargetAmazonRekognitionProjectApi XAmzTarget { get; init; }
}
