using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record PlanRef
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("externalId")]
    public required string? ExternalId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
