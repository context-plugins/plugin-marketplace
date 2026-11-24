using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CommonElements.Models;

public record ApiV1DeliveriesRequest
{
    /// <summary>
    /// Dataset key from /v1/deliveries/datasets. Current keys: associations, vendors, statutes, building-safety, report-card, changes.
    /// </summary>
    [JsonPropertyName("dataset")]
    public required string Dataset { get; init; }

    /// <summary>
    /// <c>csv</c> (default) or <c>jsonl</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("format")]
    public string? Format { get; init; }

    /// <summary>
    /// <c>snapshot</c> for the dataset as it stands, or <c>changes</c> for what moved inside the window your plan allows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mode")]
    public string? Mode { get; init; }

    /// <summary>
    /// Dataset-specific filters, in the same vocabulary as the matching read endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public object? Filters { get; init; }

    /// <summary>
    /// Subset of the dataset's column dictionary. Narrowing only; it can never add a column the dictionary does not already publish.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("columns")]
    public IReadOnlyList<string>? Columns { get; init; }

    /// <summary>
    /// Your own label for the run, echoed back on status and in the manifest.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("label")]
    public string? Label { get; init; }
}
