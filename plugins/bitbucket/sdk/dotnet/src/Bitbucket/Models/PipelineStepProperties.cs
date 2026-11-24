using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitbucket.Core.Models;

namespace Bitbucket.Models;

public record PipelineStepProperties
{
    /// <summary>
    /// The UUID identifying the step.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uuid")]
    public string? Uuid { get; init; }

    /// <summary>
    /// The timestamp when the step execution was started. This is not set when the step hasn't executed yet.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("started_on")]
    public DateTimeOffset? StartedOn { get; init; }

    /// <summary>
    /// The timestamp when the step execution was completed. This is not set if the step is still in progress.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completed_on")]
    public DateTimeOffset? CompletedOn { get; init; }

    /// <summary>
    /// The current state of the step
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public ObjectModel? State { get; init; }

    /// <summary>
    /// The Docker image used as the build container for the step.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("image")]
    public PipelineImage2? Image { get; init; }

    /// <summary>
    /// The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("setup_commands")]
    public IReadOnlyList<PipelineCommand>? SetupCommands { get; init; }

    /// <summary>
    /// The list of build commands. These commands are executed in the build container.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("script_commands")]
    public IReadOnlyList<PipelineCommand>? ScriptCommands { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
