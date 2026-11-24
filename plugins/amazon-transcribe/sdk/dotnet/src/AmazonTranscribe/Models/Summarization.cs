using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record Summarization
{
    /// <summary>
    /// Enables Generative call summarization in your Call Analytics request Generative call summarization provides a summary of the transcript including important components discussed in the conversation. For more information, see Enabling generative call summarization.
    /// </summary>
    [JsonPropertyName("GenerateAbstractiveSummary")]
    public required bool GenerateAbstractiveSummary { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
