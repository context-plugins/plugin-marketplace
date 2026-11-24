using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CommonElements.Models;

public record ApiV1DeliveriesSchedulesRequest
{
    /// <summary>
    /// Dataset key. Fixed at creation, because it is what entitlement was checked against. Current keys: associations, vendors, statutes, building-safety, report-card, changes.
    /// </summary>
    [JsonPropertyName("dataset")]
    public required string Dataset { get; init; }

    /// <summary>
    /// <c>daily</c>, <c>weekly</c>, or <c>monthly</c>.
    /// </summary>
    [JsonPropertyName("cadence")]
    public required string Cadence { get; init; }

    /// <summary>
    /// <c>csv</c> (default) or <c>jsonl</c>. Fixed at creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    /// <summary>
    /// <c>snapshot</c> or <c>changes</c>. Fixed at creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public string? Mode { get; init; }

    /// <summary>
    /// Dataset-specific filters. Editable later with PATCH.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public object? Filters { get; init; }

    /// <summary>
    /// Subset of the dataset's column dictionary. Editable later.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<string>? Columns { get; init; }

    /// <summary>
    /// Where to deliver. An unimplemented target type is refused with 501 <c>not_implemented</c> rather than accepted and silently dropped.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public object? Target { get; init; }
}
