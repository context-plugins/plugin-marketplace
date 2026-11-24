using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Core.Validation.Attributes;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

/// <summary>
/// Canonical response metadata present on every 200 (§6.3.3).
/// </summary>
public record Meta
{
    /// <summary>
    /// Correlation id (also the X-Request-Id header): req_ + 26-char Crockford ULID.
    /// </summary>
    [JsonPropertyName("requestId")]
    [RegularExpression("^req_[0-9A-HJKMNP-TV-Z]{26}$")]
    public required string RequestId { get; init; }

    [JsonPropertyName("platforms")]
    public required IReadOnlyList<Platform> Platforms { get; init; }

    /// <summary>
    /// Authenticated key environment used for this response. <c>test</c> means deterministic sandbox fixtures, never a live scrape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public EnvironmentEnum? Environment { get; init; }

    /// <summary>
    /// True when the response came from the deterministic sandbox (<c>stay_test_</c> key).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sandbox")]
    public bool? Sandbox { get; init; }

    /// <summary>
    /// Served fully from cache. Cached results still bill at tier (margin, not discount).
    /// </summary>
    [JsonPropertyName("cached")]
    public required bool Cached { get; init; }

    /// <summary>
    /// At least one fan-out leg failed; failed legs are charged 0.
    /// </summary>
    [JsonPropertyName("partial")]
    public required bool Partial { get; init; }

    [JsonPropertyName("creditsCharged")]
    [Minimum(0)]
    public required int CreditsCharged { get; init; }

    [JsonPropertyName("currency")]
    public required string Currency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagination")]
    public PaginationModel? Pagination { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("platformResults")]
    public IReadOnlyList<PlatformResult>? PlatformResults { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public IReadOnlyList<Warning>? Warnings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
