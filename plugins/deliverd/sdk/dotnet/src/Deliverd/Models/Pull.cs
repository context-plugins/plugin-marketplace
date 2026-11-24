using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

/// <summary>
/// Read the results from a connected tool with the organisation's own keys, which you never hold. Instead of results or a report
/// </summary>
public record Pull
{
    /// <summary>
    /// The connected tool to read from (Organisation → Integrations &amp; webhooks): langfuse, langsmith, braintrust or weave
    /// </summary>
    [JsonPropertyName("source")]
    public required SourceDeliverdDevTasksApi Source { get; init; }

    /// <summary>
    /// The experiment's name; the newest with it is read. In LangSmith and Braintrust, also the name a run suffixed (credit-memo-v12 finds credit-memo-v12-1a2b3c4d); in Weave, the evaluation's name or its run's
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("experiment")]
    [StringLength(200, MinimumLength = 1)]
    public string? Experiment { get; init; }

    /// <summary>
    /// Or the experiment's id, exactly (in Weave, the evaluation run's call id)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("experimentId")]
    [StringLength(200, MinimumLength = 1)]
    public string? ExperimentId { get; init; }

    /// <summary>
    /// Look for it from this time; 90 days back when absent
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("since")]
    public DateTimeOffset? Since { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
