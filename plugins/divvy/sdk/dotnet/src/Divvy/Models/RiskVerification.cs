using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record RiskVerification
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decision")]
    public string? Decision { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
