using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record ModelsLexCreateBotVersionRequest
{
    /// <summary>
    /// The name of the bot that you want to create a new version of. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Identifies a specific revision of the $LATEST version of the bot. If you specify a checksum and the $LATEST version of the bot has a different checksum, a PreconditionFailedException exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the $LATEST version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("checksum")]
    public string? Checksum { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
