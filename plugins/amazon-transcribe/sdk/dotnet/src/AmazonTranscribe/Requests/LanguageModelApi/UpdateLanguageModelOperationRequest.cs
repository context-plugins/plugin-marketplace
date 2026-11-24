using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.LanguageModelApi;

/// <summary>
/// The inputs of the UpdateLanguageModel operation.
/// </summary>
public sealed record UpdateLanguageModelOperationRequest
{
    public required XAmzTarget4AmazonTranscribeServiceLanguageModelApi XAmzTarget { get; init; }
}
