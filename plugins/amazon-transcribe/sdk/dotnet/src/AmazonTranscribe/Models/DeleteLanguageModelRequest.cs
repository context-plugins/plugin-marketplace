using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Models;

namespace AmazonTranscribe.Models;

public record DeleteLanguageModelRequest
{
    /// <summary>
    /// The name of the custom language model you want to delete. Model names are case sensitive.
    /// </summary>
    [JsonPropertyName("ModelName")]
    public required string ModelName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
