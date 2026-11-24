using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListEntityRecognizers operation.
/// </summary>
public sealed record ListEntityRecognizersOperationRequest
{
    public required XAmzTarget30 XAmzTarget { get; init; }
}
