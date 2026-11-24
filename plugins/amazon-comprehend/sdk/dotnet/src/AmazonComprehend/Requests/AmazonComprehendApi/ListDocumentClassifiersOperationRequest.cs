using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListDocumentClassifiers operation.
/// </summary>
public sealed record ListDocumentClassifiersOperationRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
