using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record BulkSignalsResponse
{
    [JsonPropertyName("ingested")]
    public required int Ingested { get; init; }

    [JsonPropertyName("duplicates")]
    public required int Duplicates { get; init; }

    [JsonPropertyName("failed")]
    public required int Failed { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
