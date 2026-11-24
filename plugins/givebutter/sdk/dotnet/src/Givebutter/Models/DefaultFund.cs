using System.Text.Json.Serialization;
using Givebutter.Core.Models;

namespace Givebutter.Models;

/// <summary>
/// Accepts a <c>string</c> value.
/// </summary>
public record DefaultFund
{
    [JsonPropertyName("name")]
    public string Name { get; } = "default_fund";

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
