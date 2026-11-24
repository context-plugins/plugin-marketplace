using System;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Models.Enums;

namespace Jid.Models;

/// <summary>
/// What a company's own website states about itself (provenance tier website_declared): identity context only, never a registry result. Present only when no Jid file holds or is associated with the domain.
/// </summary>
public record WebsiteDeclared
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tier")]
    public Tier? Tier { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    public string? Domain { get; init; }

    /// <summary>
    /// As printed, with its legal form
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legal_name")]
    public string? LegalName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trade_name")]
    public string? TradeName { get; init; }

    /// <summary>
    /// As printed; null when the site prints addresses in several states
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public string? Address { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public string? State { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postal_code")]
    public string? PostalCode { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source_url")]
    public string? SourceUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("read_at")]
    public DateTimeOffset? ReadAt { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("how")]
    public string? How { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public string? Note { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
