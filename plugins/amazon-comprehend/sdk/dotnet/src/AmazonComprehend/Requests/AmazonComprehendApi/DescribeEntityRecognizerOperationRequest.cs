using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeEntityRecognizer operation.
/// </summary>
public sealed record DescribeEntityRecognizerOperationRequest
{
    public required XAmzTarget29 XAmzTarget { get; init; }
}
