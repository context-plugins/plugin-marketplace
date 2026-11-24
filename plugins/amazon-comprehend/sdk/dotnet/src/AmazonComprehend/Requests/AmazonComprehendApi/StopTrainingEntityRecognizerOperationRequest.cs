using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopTrainingEntityRecognizer operation.
/// </summary>
public sealed record StopTrainingEntityRecognizerOperationRequest
{
    public required XAmzTarget81 XAmzTarget { get; init; }
}
