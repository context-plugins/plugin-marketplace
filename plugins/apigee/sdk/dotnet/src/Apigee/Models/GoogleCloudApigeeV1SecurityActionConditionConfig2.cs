using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Required. A valid SecurityAction must contain at least one condition.
/// </summary>
public record GoogleCloudApigeeV1SecurityActionConditionConfig2
{
    /// <summary>
    /// Optional. A list of API Products. Limit 1000 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProducts")]
    public IReadOnlyList<string>? ApiProducts { get; init; }

    /// <summary>
    /// Optional. A list of user agents to deny. We look for exact matches. Limit 50 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("userAgents")]
    public IReadOnlyList<string>? UserAgents { get; init; }

    /// <summary>
    /// Optional. A list of developer apps. Limit 1000 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developerApps")]
    public IReadOnlyList<string>? DeveloperApps { get; init; }

    /// <summary>
    /// Optional. A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipAddressRanges")]
    public IReadOnlyList<string>? IpAddressRanges { get; init; }

    /// <summary>
    /// Optional. A list of Bot Reasons. Current options: Flooder, Brute Guessor, Static Content Scraper, OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper, Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("botReasons")]
    public IReadOnlyList<string>? BotReasons { get; init; }

    /// <summary>
    /// Optional. Act only on particular HTTP methods. E.g. A read-only API can block POST/PUT/DELETE methods. Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpMethods")]
    public IReadOnlyList<string>? HttpMethods { get; init; }

    /// <summary>
    /// Optional. A list of developers. Limit 1000 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("developers")]
    public IReadOnlyList<string>? Developers { get; init; }

    /// <summary>
    /// Optional. A list of access_tokens. Limit 1000 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessTokens")]
    public IReadOnlyList<string>? AccessTokens { get; init; }

    /// <summary>
    /// Optional. A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asns")]
    public IReadOnlyList<string>? Asns { get; init; }

    /// <summary>
    /// Optional. A list of API keys. Limit 1000 per action.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiKeys")]
    public IReadOnlyList<string>? ApiKeys { get; init; }

    /// <summary>
    /// Optional. A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("regionCodes")]
    public IReadOnlyList<string>? RegionCodes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
