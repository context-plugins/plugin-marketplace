using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using WhoisFreaks.Core.Models;

namespace WhoisFreaks.Models;

/// <summary>
/// Request body for POST /v2.0/domain/availability. Use domainNames OR tld.
/// </summary>
public record BulkDomainAvailabilityRequest
{
    /// <summary>
    /// Mode 1 — list of full domain names. Cannot be used with tld.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domainNames")]
    [MaxLength(100)]
    public IReadOnlyList<string>? DomainNames { get; init; }

    /// <summary>
    /// Mode 2 — TLDs to check against the domain query param. Cannot be used with domainNames.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tld")]
    [MaxLength(100)]
    public IReadOnlyList<string>? Tld { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
