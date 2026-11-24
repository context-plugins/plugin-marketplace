using AmazonTranscribe.Models.Enums;

namespace AmazonTranscribe.Requests.LanguageModelApi;

/// <summary>
/// The inputs of the ListLanguageModels operation.
/// </summary>
public sealed record ListLanguageModelsOperationRequest
{
    public required XAmzTarget3AmazonTranscribeServiceLanguageModelApi XAmzTarget { get; init; }
}
