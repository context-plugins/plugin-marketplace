using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

/// <summary>
/// A tool's own report, turned into results here. Instead of results
/// </summary>
public record ReportDeliverdDevTasksApi
{
    /// <summary>
    /// The tool that wrote it: deliverd, promptfoo, inspect, garak, weave, braintrust, junit
    /// </summary>
    [JsonPropertyName("format")]
    public required FormatDeliverdDevTasksApi Format { get; init; }

    /// <summary>
    /// The report file as the tool wrote it
    /// </summary>
    [JsonPropertyName("content")]
    [StringLength(4000000, MinimumLength = 1)]
    public required string Content { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
