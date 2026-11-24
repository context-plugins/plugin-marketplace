using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Core.Validation.Attributes;
using Jid.Models.Enums;

namespace Jid.Models;

public record V1ScreenRequest
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("domain")]
    [MaxLength(253)]
    public string? Domain { get; init; }

    /// <summary>
    /// Only the host is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MaxLength(2000)]
    public string? Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    [MaxLength(254)]
    public string? Email { get; init; }

    /// <summary>
    /// Ideally +E.164.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phone")]
    [MaxLength(40)]
    public string? Phone { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("company_name")]
    [MaxLength(200)]
    public string? CompanyName { get; init; }

    /// <summary>
    /// A person's name: accepted, never looked up.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(200)]
    public string? Name { get; init; }

    /// <summary>
    /// Default lead, or purchase when only a url or domain is given.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("context")]
    public ContextJidScreenApi? Context { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("policy")]
    public PolicyJidScreenApi? Policy { get; init; } = PolicyJidScreenApi.Balanced;

    /// <summary>
    /// USD at stake
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    [Minimum(0.0)]
    public double? Amount { get; init; }

    /// <summary>
    /// Default country for a phone number without +
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    [RegularExpression("^[A-Z]{2}$")]
    public string? Country { get; init; }

    /// <summary>
    /// Keep the receipt 13 months instead of 30 days
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retain")]
    public bool? Retain { get; init; }

    /// <summary>
    /// Location check: country of the request (e.g. x-vercel-ip-country)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_country")]
    [RegularExpression("^[A-Z]{2}$")]
    public string? IpCountry { get; init; }

    /// <summary>
    /// Location check: ISO 3166-2 region of the request
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_region")]
    public string? IpRegion { get; init; }

    /// <summary>
    /// Accepted, not compared, not stored
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_city")]
    public string? IpCity { get; init; }

    /// <summary>
    /// Location check: ASN of the request's network (hosting/VPN recognition)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip_asn")]
    public int? IpAsn { get; init; }

    /// <summary>
    /// Optional raw IP: used in memory for the Tor and ASN lookups only, never stored or returned
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ip")]
    public string? Ip { get; init; }

    /// <summary>
    /// Location check: IANA time zone from the browser
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("browser_timezone")]
    public string? BrowserTimezone { get; init; }

    /// <summary>
    /// Location check: the country the counterparty stated
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stated_country")]
    [RegularExpression("^[A-Z]{2}$")]
    public string? StatedCountry { get; init; }

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

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
