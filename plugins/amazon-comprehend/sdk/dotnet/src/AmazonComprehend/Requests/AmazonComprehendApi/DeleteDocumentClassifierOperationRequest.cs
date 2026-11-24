using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DeleteDocumentClassifier operation.
/// </summary>
public sealed record DeleteDocumentClassifierOperationRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
