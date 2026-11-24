using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the TagResource operation.
/// </summary>
public sealed record TagResourceOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceOperationsApi XAmzTarget { get; init; }
}
