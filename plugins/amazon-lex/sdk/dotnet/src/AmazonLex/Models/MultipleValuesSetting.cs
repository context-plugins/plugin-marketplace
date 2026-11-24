using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record MultipleValuesSetting
{
    /// <summary>
    /// Indicates whether a slot can return multiple values. When true, the slot may return more than one value in a response. When false, the slot returns only a single value. Multi-value slots are only available in the en-US locale. If you set this value to true in any other locale, Amazon Lex throws a ValidationException. If the allowMutlipleValues is not set, the default value is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("allowMultipleValues")]
    public bool? AllowMultipleValues { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
