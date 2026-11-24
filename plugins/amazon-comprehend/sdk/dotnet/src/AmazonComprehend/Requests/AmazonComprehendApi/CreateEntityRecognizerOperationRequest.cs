using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the CreateEntityRecognizer operation.
/// </summary>
public sealed record CreateEntityRecognizerOperationRequest
{
    public required XAmzTarget27 XAmzTarget { get; init; }
}
