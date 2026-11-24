using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.Operations;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceOperationsApi XAmzTarget { get; init; }
}
