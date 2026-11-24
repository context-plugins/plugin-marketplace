using System;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record CompaniesKrsSanctionsResponse
{
    [JsonPropertyName("krs")]
    public required string Krs { get; init; }

    [JsonPropertyName("entity_id")]
    public required Guid EntityId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sanctions")]
    public Sanctions? Sanctions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
