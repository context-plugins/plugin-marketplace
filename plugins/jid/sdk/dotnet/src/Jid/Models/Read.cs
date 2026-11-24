using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Jid.Core.Models;
using Jid.Models.Enums;

namespace Jid.Models;

/// <summary>
/// What to show a human: render this and nothing else.
/// </summary>
public record Read
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headline")]
    public string? Headline { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("recommendation")]
    public Recommendation1? Recommendation { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("passed")]
    public int? Passed { get; init; }

    /// <summary>
    /// Checks that ran (status pass or fail) and decide (severity block or warn), plus location consistency, which is counted but never decides
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("total")]
    public int? Total { get; init; }

    /// <summary>
    /// Why a read with no registry match is not engage, e.g. "Not found on the registers Jid checks for Indonesia (LEI records only)". Also in the headline, followed by ", so: verify first".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reason")]
    public string? Reason { get; init; }

    /// <summary>
    /// Labels of deciding checks that did not run or did not finish
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("not_checked")]
    [MaxLength(4)]
    public IReadOnlyList<string>? NotChecked { get; init; }

    /// <summary>
    /// Qualify only, response only (never stored): the Jid Signals location next to the stated place and the company domain's age
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sender")]
    public string? Sender { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failed")]
    [MaxLength(3)]
    public IReadOnlyList<Failed>? Failed { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lookups")]
    [MaxLength(4)]
    public IReadOnlyList<Lookup>? Lookups { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("file_url")]
    public string? FileUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("subject")]
    public string? Subject { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
