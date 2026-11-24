using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the CreateDocumentClassifier operation.
/// </summary>
public sealed record CreateDocumentClassifierOperationRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
