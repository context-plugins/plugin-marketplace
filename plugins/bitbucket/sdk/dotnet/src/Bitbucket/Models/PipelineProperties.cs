using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;
using Bitbucket.Models.AllOf;

namespace Bitbucket.Models;

public record PipelineProperties
{
    /// <summary>
    /// The UUID identifying the pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// The build number of the pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_number")]
    public int? BuildNumber { get; init; }

    /// <summary>
    /// The Bitbucket account that was used to create the pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creator")]
    public Account1? Creator { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repository")]
    public RepositoryBitbucketPipelinesApi? Repository { get; init; }

    /// <summary>
    /// The target that the pipeline built.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public ObjectModel? Target { get; init; }

    /// <summary>
    /// The trigger used for the pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger")]
    public ObjectModel? Trigger { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public ObjectModel? State { get; init; }

    /// <summary>
    /// The variables for the pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    [MinLength(0)]
    public IReadOnlyList<PipelineVariable>? Variables { get; init; }

    /// <summary>
    /// The timestamp when the pipeline was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_on")]
    public DateTimeOffset? CreatedOn { get; init; }

    /// <summary>
    /// The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_on")]
    public DateTimeOffset? CompletedOn { get; init; }

    /// <summary>
    /// The number of build seconds used by this pipeline.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("build_seconds_used")]
    public int? BuildSecondsUsed { get; init; }

    /// <summary>
    /// An ordered list of sources of the pipeline configuration
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("configuration_sources")]
    [MinLength(0)]
    public IReadOnlyList<PipelineConfigurationSource>? ConfigurationSources { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("links")]
    public PipelinesPipelineLinks? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
