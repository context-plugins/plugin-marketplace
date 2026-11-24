using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record CustomerStateSeatAssignee
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("externalId")]
    public required string ExternalId { get; init; }

    [JsonPropertyName("name")]
    public required string? Name { get; init; }

    [JsonPropertyName("email")]
    public required string? Email { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
