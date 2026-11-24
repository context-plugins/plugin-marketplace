using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CommonElements.Models;

public record ApiV1DeliveriesSchedulesRequest1
{
    /// <summary>
    /// <c>daily</c>, <c>weekly</c>, or <c>monthly</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cadence")]
    public string? Cadence { get; init; }

    /// <summary>
    /// Replacement filters, re-validated against the dataset.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public object? Filters { get; init; }

    /// <summary>
    /// Replacement column subset, re-validated against the dictionary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<string>? Columns { get; init; }

    /// <summary>
    /// Pause or resume. Resuming recomputes the next run from now, so a schedule paused for a month does not wake and fire a backlog.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("paused")]
    public bool? Paused { get; init; }
}
