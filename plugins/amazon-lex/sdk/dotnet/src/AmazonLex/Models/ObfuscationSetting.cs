using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ObfuscationSetting
{
    /// <summary>
    /// Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.
    /// </summary>
    [JsonPropertyName("obfuscationSettingType")]
    public required ObfuscationSettingType ObfuscationSettingType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
