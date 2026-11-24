using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.LanguageModelApi;

/// <summary>
/// The inputs of the DescribeLanguageModel operation.
/// </summary>
public sealed record DescribeLanguageModelOperationRequest
{
    public required XAmzTarget2AmazonTranscribeServiceLanguageModelApi XAmzTarget { get; init; }
}
