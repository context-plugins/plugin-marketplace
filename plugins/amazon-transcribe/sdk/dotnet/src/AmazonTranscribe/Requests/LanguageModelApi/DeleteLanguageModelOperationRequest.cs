using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.LanguageModelApi;

/// <summary>
/// The inputs of the DeleteLanguageModel operation.
/// </summary>
public sealed record DeleteLanguageModelOperationRequest
{
    public required XAmzTarget1AmazonTranscribeServiceLanguageModelApi XAmzTarget { get; init; }
}
