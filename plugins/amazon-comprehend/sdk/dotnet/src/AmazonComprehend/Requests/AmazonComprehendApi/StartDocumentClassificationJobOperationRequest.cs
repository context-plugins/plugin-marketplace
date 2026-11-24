using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartDocumentClassificationJob operation.
/// </summary>
public sealed record StartDocumentClassificationJobOperationRequest
{
    public required XAmzTarget41 XAmzTarget { get; init; }
}
