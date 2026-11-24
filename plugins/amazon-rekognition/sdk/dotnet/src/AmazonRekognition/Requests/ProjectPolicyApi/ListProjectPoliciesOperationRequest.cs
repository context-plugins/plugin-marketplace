using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectPolicyApi;

/// <summary>
/// The inputs of the ListProjectPolicies operation.
/// </summary>
public sealed record ListProjectPoliciesOperationRequest
{
    public required XAmzTarget1AmazonRekognitionProjectPolicyApi XAmzTarget { get; init; }
}
