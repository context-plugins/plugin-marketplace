using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;
using OddsRelay.Models.Enums;

namespace OddsRelay.Models;

public record Error6
{
    /// <summary>
    /// Stable machine code; branch on this, never on <c>message</c>.
    /// </summary>
    [JsonPropertyName("code")]
    public required Code4 Code { get; init; }

    /// <summary>
    /// Human text; may change.
    /// </summary>
    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// <c>or_req_</c> + 32 hex, as <c>X-OddsRelay-Request-Id</c>.
    /// </summary>
    [JsonPropertyName("request_id")]
    public required string RequestId { get; init; }

    /// <summary>
    /// Scope 403s only: which axis refused (<c>not_in_key_scope</c> and <c>product_not_in_region</c> product; <c>region_not_in_scope</c> and <c>bookmaker_not_in_region</c> region; <c>schema_not_in_scope</c> schema).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; }

    /// <summary>
    /// <c>unknown_sport</c> (sport key bases), <c>unknown_bookmaker</c>, <c>unknown_exchange</c>, <c>bookmaker_not_in_plan</c> (your plan's bookmakers, or your account scope's, in the call's region), <c>sport_not_in_plan</c>, <c>market_not_in_plan</c> and <c>exchange_not_in_plan</c> (the scope's list for that product): the values accepted, sorted. <c>unknown_market</c>: the market keys this product carries, sorted (keyless <c>/v2/coverage</c>'s <c>markets</c>); a key another product carries may also be accepted on this route, and matches nothing here.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("valid")]
    public IReadOnlyList<string>? Valid { get; init; }

    /// <summary>
    /// <c>unknown_market</c> only, when another product carries the market: those products, sorted, as the <c>{type}</c> of <c>/v2/odds/{type}</c> (or <c>raw</c>). Left out when no product carries it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("products")]
    public IReadOnlyList<string>? Products { get; init; }

    /// <summary>
    /// <c>account_suspended</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public Reason? Reason { get; init; }

    /// <summary>
    /// <c>account_suspended</c> only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dashboard_url")]
    public string? DashboardUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
