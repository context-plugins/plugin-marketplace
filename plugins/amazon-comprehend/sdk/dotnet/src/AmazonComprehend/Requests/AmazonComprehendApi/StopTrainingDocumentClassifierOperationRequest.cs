using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopTrainingDocumentClassifier operation.
/// </summary>
public sealed record StopTrainingDocumentClassifierOperationRequest
{
    public required XAmzTarget80 XAmzTarget { get; init; }
}
