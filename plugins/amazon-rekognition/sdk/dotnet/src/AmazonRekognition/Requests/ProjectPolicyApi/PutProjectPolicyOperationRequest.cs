using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectPolicyApi;

/// <summary>
/// The inputs of the PutProjectPolicy operation.
/// </summary>
public sealed record PutProjectPolicyOperationRequest
{
    public required XAmzTarget2AmazonRekognitionProjectPolicyApi XAmzTarget { get; init; }
}
