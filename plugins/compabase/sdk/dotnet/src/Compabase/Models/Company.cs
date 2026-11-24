using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record Company
{
    [JsonPropertyName("entity_id")]
    public required Guid EntityId { get; init; }

    /// <summary>
    /// KRS number (10 digits), if available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("registry_number")]
    public string? RegistryNumber { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    public string? CompanyName { get; init; }

    [JsonPropertyName("relationships")]
    public required IReadOnlyList<Relationship> Relationships { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
