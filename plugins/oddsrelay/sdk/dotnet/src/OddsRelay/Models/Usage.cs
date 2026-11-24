using System.Collections.Generic;
using System.Text.Json.Serialization;
using OddsRelay.Core.Models;

namespace OddsRelay.Models;

public record Usage
{
    [JsonPropertyName("plan")]
    public required string? Plan { get; init; }

    [JsonPropertyName("rate_card")]
    public required string RateCard { get; init; }

    [JsonPropertyName("account")]
    public required Account Account { get; init; }

    /// <summary>
    /// <c>remaining</c> and <c>limit</c> read <c>unlimited</c> on an unlimited account; null while the balance is unknown.
    /// </summary>
    [JsonPropertyName("tokens")]
    public required Tokens Tokens { get; init; }

    [JsonPropertyName("regions")]
    public required IReadOnlyList<string> Regions { get; init; }

    [JsonPropertyName("key")]
    public required Key Key { get; init; }

    [JsonPropertyName("flood_cap")]
    public required FloodCap FloodCap { get; init; }

    /// <summary>
    /// Your account's scope, or null when it has none: <c>{"products": {&lt;product&gt;: {&lt;axis&gt;: [values] | null}}}</c>. A product not listed is not readable; within one, a null axis means every value. The axes are each product's filters: <c>sports</c>, <c>markets</c>, <c>bookmakers</c>, <c>exchanges</c> on the six matched boards; <c>sports</c>, <c>markets</c>, <c>bookmakers</c> (venues of both kinds) on <c>raw</c>, which also answers <c>/v2/odds/event/{id}</c>. Products and axes are always listed in that order and each list sorted. A value a call names outside it is a 403 <c>*_not_in_plan</c> with <c>valid</c>; a filter left out is trimmed to it.
    /// </summary>
    [JsonPropertyName("scope")]
    public required object? Scope { get; init; }

    /// <summary>
    /// The version of <c>scope</c>, raised by each change; null when the account has no scope.
    /// </summary>
    [JsonPropertyName("scope_version")]
    public required int? ScopeVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
