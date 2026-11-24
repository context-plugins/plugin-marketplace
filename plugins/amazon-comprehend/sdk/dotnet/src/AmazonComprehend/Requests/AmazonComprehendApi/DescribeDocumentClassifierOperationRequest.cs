using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeDocumentClassifier operation.
/// </summary>
public sealed record DescribeDocumentClassifierOperationRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
