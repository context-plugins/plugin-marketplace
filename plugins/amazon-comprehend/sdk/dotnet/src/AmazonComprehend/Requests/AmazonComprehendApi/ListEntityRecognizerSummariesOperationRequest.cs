using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListEntityRecognizerSummaries operation.
/// </summary>
public sealed record ListEntityRecognizerSummariesOperationRequest
{
    public required XAmzTarget77 XAmzTarget { get; init; }
}
