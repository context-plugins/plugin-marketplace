using System.Text.Json.Serialization;
using Clix.Core.Models;

namespace Clix.Models;

public record Clixexternalv1HealthCheckResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("msg")]
    public string? Msg { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
