using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;
using Bitbucket.Models.Enums;

namespace Bitbucket.Models;

public record PipelineRunnerStateProperties
{
    /// <summary>
    /// The current status of the runner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public StatusBitbucketPipelinesApi? Status { get; init; }

    /// <summary>
    /// Version information for the runner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public PipelineRunnerVersion2? Version { get; init; }

    /// <summary>
    /// The timestamp when the runner state was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_on")]
    public DateTimeOffset? UpdatedOn { get; init; }

    /// <summary>
    /// Whether the runner is cordoned (prevented from accepting new steps).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cordoned")]
    public bool? Cordoned { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
