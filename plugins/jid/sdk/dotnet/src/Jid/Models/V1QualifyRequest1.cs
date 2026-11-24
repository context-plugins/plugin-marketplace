using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Models.Enums;

namespace Jid.Models;

public record V1QualifyRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [MaxLength(254)]
    public string? Email { get; init; }

    [JsonPropertyName("domain")]
    [MaxLength(253)]
    public required string Domain { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    [MaxLength(200)]
    public string? CompanyName { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public Context? Context { get; init; }

    /// <summary>
    /// Location check: country of the request (e.g. x-vercel-ip-country). Stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_country")]
    [RegularExpression("^[A-Z]{2}$")]
    public string? IpCountry { get; init; }

    /// <summary>
    /// Location check: ISO 3166-2 region of the request (US-CA or CA). Stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_region")]
    public string? IpRegion { get; init; }

    /// <summary>
    /// Accepted, not compared, not stored, not returned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_city")]
    public string? IpCity { get; init; }

    /// <summary>
    /// Location check: ASN of the request's network (hosting/VPN recognition). Not stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_asn")]
    public int? IpAsn { get; init; }

    /// <summary>
    /// Location check: IANA time zone from the browser. Compared, not stored.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("browser_timezone")]
    public string? BrowserTimezone { get; init; }

    /// <summary>
    /// Location check: the country the submitter stated (same as context.country; either may be sent)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stated_country")]
    [RegularExpression("^[A-Z]{2}$")]
    public string? StatedCountry { get; init; }

    /// <summary>
    /// Optional raw IP: used in memory for the Tor and network lookups (Jid's Tor and GeoLite2 copies; IPinfo when enabled). Never stored, hashed or returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip")]
    public string? Ip { get; init; }

    /// <summary>
    /// Optional business phone: validity and country code (compared with the location), in memory only, never stored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [MaxLength(40)]
    public string? Phone { get; init; }

    /// <summary>
    /// Jid Signals token from the visitor's browser (the jid_signal form field set by https://jid.com/s/1.js; jid_signal is also accepted). When it verifies, its country, region, city, network type and time zone replace the ip_* fields and browser_timezone. Expired, altered or other-site tokens are skipped, never negative. See /signals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signal")]
    public string? Signal { get; init; }

    /// <summary>
    /// The submitting website's domain. Binds the signal token loosely: a token issued to another site is skipped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("site")]
    public string? Site { get; init; }

    /// <summary>
    /// Add a short summary written only from the signals.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("summary")]
    public bool? Summary { get; init; }

    /// <summary>
    /// How cautious <c>engage</c> is. Default balanced.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policy")]
    public Policy? Policy { get; init; }

    /// <summary>
    /// Opt in to keeping the message with the result for 13 months (default: hash only, 30 days).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retain")]
    public bool? Retain { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
