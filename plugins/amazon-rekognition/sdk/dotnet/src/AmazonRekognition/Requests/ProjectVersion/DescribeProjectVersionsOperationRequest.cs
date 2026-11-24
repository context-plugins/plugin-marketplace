using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.ProjectVersion;

/// <summary>
/// The inputs of the DescribeProjectVersions operation.
/// </summary>
public sealed record DescribeProjectVersionsOperationRequest
{
    public required XAmzTarget2AmazonRekognitionProjectVersionApi XAmzTarget { get; init; }
}
