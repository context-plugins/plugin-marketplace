using System.Text.Json.Serialization;
using AlphAi.Core.Models;
using AlphAi.Models.Enums;

namespace AlphAi.Models;

public record Extra
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason1? Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
