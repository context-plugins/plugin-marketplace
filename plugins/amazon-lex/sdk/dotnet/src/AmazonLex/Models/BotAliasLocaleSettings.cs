using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record BotAliasLocaleSettings
{
    /// <summary>
    /// Determines whether the locale is enabled for the bot. If the value is false, the locale isn't available for use.
    /// </summary>
    [JsonPropertyName("enabled")]
    public required bool Enabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codeHookSpecification")]
    public CodeHookSpecification? CodeHookSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
