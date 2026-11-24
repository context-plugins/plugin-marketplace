using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.AnyOf;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record Dimension
{
    /// <summary>
    /// If the type is <c>fixed</c>, the key must be a valid fixed value. See the <see href="https://developer.doit.com/docs/datahub-api">DataHub API Guide</see> for more information.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("key")]
    public string? Key { get; init; }

    /// <summary>
    /// The dimension type.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeDoiTDataHubApi? Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public Value? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
