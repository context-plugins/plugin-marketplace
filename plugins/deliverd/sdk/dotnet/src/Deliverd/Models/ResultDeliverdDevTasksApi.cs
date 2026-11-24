using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ResultDeliverdDevTasksApi
{
    /// <summary>
    /// What was measured, as the tool names it: pass_rate, accuracy, attack_success_rate
    /// </summary>
    [JsonPropertyName("metric")]
    [StringLength(200, MinimumLength = 1)]
    public required string Metric { get; init; }

    /// <summary>
    /// The measured value
    /// </summary>
    [JsonPropertyName("value")]
    public required double Value { get; init; }

    /// <summary>
    /// The tool's own verdict on this result, where it gives one
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("passed")]
    public bool? Passed { get; init; }

    /// <summary>
    /// How serious a failure of this result is: low, medium, high or critical
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("severity")]
    public SeverityDeliverdDevTasksApi? Severity { get; init; }

    /// <summary>
    /// A grouping the tool gives it: a red-team plugin, a risk category, a dataset slice
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("category")]
    [MaxLength(120)]
    public string? Category { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataset")]
    [MaxLength(200)]
    public string? Dataset { get; init; }

    /// <summary>
    /// The trace, row or run this result can be inspected at
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [MaxLength(2000)]
    public string? Url { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
