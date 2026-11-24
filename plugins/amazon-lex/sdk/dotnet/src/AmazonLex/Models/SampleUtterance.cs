using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record SampleUtterance
{
    /// <summary>
    /// The sample utterance that Amazon Lex uses to build its machine-learning model to recognize intents.
    /// </summary>
    [JsonPropertyName("utterance")]
    public required string Utterance { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
