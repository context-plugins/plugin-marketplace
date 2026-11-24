using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

public record PeopleEnrichmentRequest
{
    /// <summary>
    /// People to enrich. Each entry needs at least a linkedinUrl, or firstName + lastName + companyName or companyDomain.
    /// </summary>
    [JsonPropertyName("people")]
    [MinLength(1)]
    [MaxLength(10000)]
    public required IReadOnlyList<PersonInput> People { get; init; }

    /// <summary>
    /// Which fields to retrieve.
    /// </summary>
    [JsonPropertyName("include")]
    public required IncludeSurfePeopleApi Include { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enrichmentOptions")]
    public EnrichmentOptions? EnrichmentOptions { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("notificationOptions")]
    public NotificationOptions? NotificationOptions { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
