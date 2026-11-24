using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1TasksGovernanceEvidenceRequest
{
    [JsonPropertyName("type")]
    public required TypeDeliverdDevTasksApi Type { get; init; }

    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public required string Title { get; init; }

    /// <summary>
    /// What it shows, for a reviewer
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(4000)]
    public string? Description { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public string? Url { get; init; }

    /// <summary>
    /// The controls this evidence speaks to; one item may satisfy several
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("controls")]
    [MaxLength(20)]
    public IReadOnlyList<string>? Controls { get; init; }

    /// <summary>
    /// The finding in this task it rests on, if any
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("findingId")]
    public Guid? FindingId { get; init; }

    /// <summary>
    /// What was measured, one entry per metric: { metric, value, passed?, severity?, category?, dataset?, url? }. A control with thresholds is judged on these
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("results")]
    [MinLength(1)]
    [MaxLength(500)]
    public IReadOnlyList<ResultDeliverdDevTasksApi>? Results { get; init; }

    /// <summary>
    /// The run the results came from: { tool, runId?, name?, url?, release? }
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("run")]
    public Run? Run { get; init; }

    /// <summary>
    /// The release the results tested — any of provider, model, modelVersion, promptHash, guardrailsHash — with results, a report or a pull. Evidence that names another release than the AI system now runs does not count towards a control
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("release")]
    public Release1? Release { get; init; }

    /// <summary>
    /// A tool's own report, turned into results here. Instead of results
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("report")]
    public ReportDeliverdDevTasksApi? Report { get; init; }

    /// <summary>
    /// Read the results from a connected tool with the organisation's own keys, which you never hold. Instead of results or a report
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pull")]
    public Pull? Pull { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
