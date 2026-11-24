using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListDocumentClassifierSummaries operation.
/// </summary>
public sealed record ListDocumentClassifierSummariesOperationRequest
{
    public required XAmzTarget76 XAmzTarget { get; init; }
}
