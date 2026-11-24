using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListDocumentClassificationJobs operation.
/// </summary>
public sealed record ListDocumentClassificationJobsOperationRequest
{
    public required XAmzTarget40 XAmzTarget { get; init; }
}
