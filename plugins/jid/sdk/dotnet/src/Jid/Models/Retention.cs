using System.Text.Json.Serialization;
using Jid.Core.Models;

namespace Jid.Models;

public record Retention
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result_until")]
    public string? ResultUntil { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message_stored")]
    public bool? MessageStored { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
