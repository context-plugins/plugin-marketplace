using System;
using System.Text.Json.Serialization;
using Compabase.Core.Models;

namespace Compabase.Models;

public record PersonSearchItem
{
    /// <summary>
    /// Stable UUID key for this person. Use with <c>GET /persons/{personId}/connections</c>.
    /// </summary>
    [JsonPropertyName("person_id")]
    public required Guid PersonId { get; init; }

    /// <summary>
    /// Full display name of the person.
    /// </summary>
    [JsonPropertyName("display_name")]
    public required string? DisplayName { get; init; }

    /// <summary>
    /// Year of birth when known (derived from registry data; full birth date is not exposed). <c>null</c> if unavailable.
    /// </summary>
    [JsonPropertyName("birth_year")]
    public required int? BirthYear { get; init; }

    /// <summary>
    /// Number of distinct companies this person is linked to.
    /// </summary>
    [JsonPropertyName("company_count")]
    public required int CompanyCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
