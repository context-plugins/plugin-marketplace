using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GetBotRequest
{
    /// <summary>
    /// The name of the bot. The name is case sensitive.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The version or alias of the bot.
    /// </summary>
    [JsonPropertyName("versionOrAlias")]
    public required string VersionOrAlias { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
