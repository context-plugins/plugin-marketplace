using System.Text.Json.Serialization;
using FirefliesAi.Core.Models;

namespace FirefliesAi.Models;

public record ExtensionsModel
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
