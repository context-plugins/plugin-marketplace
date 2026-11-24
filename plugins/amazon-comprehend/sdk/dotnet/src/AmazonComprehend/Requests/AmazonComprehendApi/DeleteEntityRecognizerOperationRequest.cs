using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DeleteEntityRecognizer operation.
/// </summary>
public sealed record DeleteEntityRecognizerOperationRequest
{
    public required XAmzTarget28 XAmzTarget { get; init; }
}
