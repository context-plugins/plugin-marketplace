using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RuntimeHintValue
{
    /// <summary>
    /// The phrase that Amazon Lex should look for in the user's input to the bot.
    /// </summary>
    [JsonPropertyName("phrase")]
    public required string Phrase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
