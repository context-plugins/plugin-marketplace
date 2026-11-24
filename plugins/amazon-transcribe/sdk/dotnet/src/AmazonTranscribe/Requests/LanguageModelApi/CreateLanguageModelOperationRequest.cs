using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.LanguageModelApi;

/// <summary>
/// The inputs of the CreateLanguageModel operation.
/// </summary>
public sealed record CreateLanguageModelOperationRequest
{
    public required XAmzTargetAmazonTranscribeServiceLanguageModelApi XAmzTarget { get; init; }
}
