using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanyLushaSignalsApi
{
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("domain")]
    public required string Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("is_current")]
    public bool? IsCurrent { get; init; } = true;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
