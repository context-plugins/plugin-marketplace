using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeDocumentClassificationJob operation.
/// </summary>
public sealed record DescribeDocumentClassificationJobOperationRequest
{
    public required XAmzTarget39 XAmzTarget { get; init; }
}
