using System.Text.Json.Serialization;
using Hud.Core.Models;

namespace Hud.Models;

public record RegistryEnvVarBatchResponse
{
    [JsonPropertyName("created")]
    public required int Created { get; init; }

    [JsonPropertyName("updated")]
    public required int Updated { get; init; }

    [JsonPropertyName("deleted")]
    public required int Deleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
