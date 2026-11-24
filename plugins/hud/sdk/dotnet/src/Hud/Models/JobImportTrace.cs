using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hud.Core.Models;
using Hud.Models.AnyOf;

namespace Hud.Models;

/// <summary>
/// One run of a task, done outside HUD.
/// </summary>
public record JobImportTrace
{
    [JsonPropertyName("external_id")]
    [StringLength(255, MinimumLength = 1)]
    public required string ExternalId { get; init; }

    /// <summary>
    /// <c>content_digest</c> of the build whose source defines the task the run executed
    /// </summary>
    [JsonPropertyName("task_digest")]
    [RegularExpression("^sha256:[0-9a-f]{64}$")]
    public required string TaskDigest { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public NameHudPlatformJobsApi? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("agent")]
    public Agent? Agent { get; init; }

    /// <summary>
    /// Model the run used, as the source reported it. A HUD model id or <c>model_name</c> also links the trace to that model.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public Model1? Model { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
