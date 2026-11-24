using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1PoliciesReplayResponse
{
    [JsonPropertyName("policyName")]
    public required string PolicyName { get; init; }

    [JsonPropertyName("days")]
    public required int Days { get; init; }

    [JsonPropertyName("since")]
    public required string Since { get; init; }

    /// <summary>
    /// Past requests evaluated twice
    /// </summary>
    [JsonPropertyName("replayed")]
    public required int Replayed { get; init; }

    [JsonPropertyName("changed")]
    public required int Changed { get; init; }

    [JsonPropertyName("unchanged")]
    public required int Unchanged { get; init; }

    /// <summary>
    /// Would ask less of the request than now
    /// </summary>
    [JsonPropertyName("loosened")]
    public required int Loosened { get; init; }

    [JsonPropertyName("tightened")]
    public required int Tightened { get; init; }

    /// <summary>
    /// A person rejected it; the proposal would allow it without asking
    /// </summary>
    [JsonPropertyName("rejectedNowAllowed")]
    public required int RejectedNowAllowed { get; init; }

    /// <summary>
    /// Same effect, decided by a different rule
    /// </summary>
    [JsonPropertyName("ruleChanged")]
    public required int RuleChanged { get; init; }

    [JsonPropertyName("transitions")]
    public required IReadOnlyList<Transition> Transitions { get; init; }

    [JsonPropertyName("byAction")]
    public required IReadOnlyList<ByAction> ByAction { get; init; }

    [JsonPropertyName("examples")]
    public required IReadOnlyList<Example> Examples { get; init; }

    [JsonPropertyName("truncated")]
    public required bool Truncated { get; init; }

    [JsonPropertyName("notes")]
    public required IReadOnlyList<string> Notes { get; init; }

    /// <summary>
    /// Whether this breaks the <c>failOn</c> line
    /// </summary>
    [JsonPropertyName("fail")]
    public required bool Fail { get; init; }

    [JsonPropertyName("failReason")]
    public required string? FailReason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
