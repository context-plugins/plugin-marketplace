using AmazonRekognition.Models.Enums;

namespace AmazonRekognition.Requests.Project;

/// <summary>
/// The inputs of the DescribeProjects operation.
/// </summary>
public sealed record DescribeProjectsOperationRequest
{
    public required XAmzTarget2AmazonRekognitionProjectApi XAmzTarget { get; init; }
}
