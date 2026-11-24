using System.Text.Json.Serialization;
using RelmCrm.Core.Models;
using RelmCrm.Models.Enums;

namespace RelmCrm.Models;

public record ActionModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
