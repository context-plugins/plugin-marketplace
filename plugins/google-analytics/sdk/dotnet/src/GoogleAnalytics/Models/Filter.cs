using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Models;

namespace GoogleAnalytics.Models;

/// <summary>
/// An expression to filter dimension or metric values.
/// </summary>
public record Filter
{
    /// <summary>
    /// The dimension name or metric name. In most methods, dimensions &amp; metrics can be used for the first time in this field. However in a RunPivotReportRequest, this field must be additionally specified by name in the RunPivotReportRequest's dimensions or metrics.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fieldName")]
    public string? FieldName { get; init; }

    /// <summary>
    /// A filter for two values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("betweenFilter")]
    public BetweenFilter2? BetweenFilter { get; init; }

    /// <summary>
    /// A filter for in list values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("inListFilter")]
    public InListFilter2? InListFilter { get; init; }

    /// <summary>
    /// A filter for numeric or date values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numericFilter")]
    public NumericFilter2? NumericFilter { get; init; }

    /// <summary>
    /// Strings related filter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("stringFilter")]
    public StringFilter2? StringFilter { get; init; }

    /// <summary>
    /// A filter for empty values such as <c>(not set)</c> and <c>""</c> values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("emptyFilter")]
    public object? EmptyFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
