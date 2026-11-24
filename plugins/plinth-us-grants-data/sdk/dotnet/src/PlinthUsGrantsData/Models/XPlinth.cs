using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

/// <summary>
/// Non-Candid metadata. Safe to ignore for compatibility; <c>unsupported</c> is the one to assert on.
/// </summary>
public record XPlinth
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("warnings")]
    public Warnings? Warnings { get; init; }

    /// <summary>
    /// Parameters that did not apply. Non-empty means the answer is not the question asked.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unsupported")]
    public Unsupported? Unsupported { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataset")]
    public Dataset? Dataset { get; init; }

    /// <summary>
    /// Every corpus this response could have drawn on, each with its own licence terms. /sql only: you write the query, so which corpus answered is not knowable per response — honour every licence listed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("datasets")]
    public Datasets? Datasets { get; init; }

    /// <summary>
    /// Per-class cost of <c>?exclude=</c>, keyed by class name, plus <c>overlapping</c> — true when classes were counted independently and therefore sum to more than the whole. /grants/summary only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("excluded")]
    public Excluded? Excluded { get; init; }

    /// <summary>
    /// On /grants/recipients: the grants held out of the ranking because their recipient is a person, a class of people, or nobody the filer named. Add these back to reconcile with /grants/summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("unidentified")]
    public Unidentified1? Unidentified { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
