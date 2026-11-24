using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectPolicyApi;

/// <summary>
/// The inputs of the DeleteProjectPolicy operation.
/// </summary>
public sealed record DeleteProjectPolicyOperationRequest
{
    public required XAmzTargetAmazonRekognitionProjectPolicyApi XAmzTarget { get; init; }
}
