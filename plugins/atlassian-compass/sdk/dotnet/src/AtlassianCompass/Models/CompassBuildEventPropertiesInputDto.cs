using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Models;
using AtlassianCompass.Models.Enums;

namespace AtlassianCompass.Models;

/// <summary>
/// The list of properties of the build event.
/// </summary>
public record CompassBuildEventPropertiesInputDto
{
    /// <summary>
    /// The state of the build.
    /// </summary>
    [JsonPropertyName("state")]
    public required State2 State { get; init; }

    /// <summary>
    /// The build event pipeline.
    /// </summary>
    [JsonPropertyName("pipeline")]
    public required CompassBuildEventPipelineInputDto Pipeline { get; init; }

    /// <summary>
    /// The time the build started.
    /// </summary>
    [JsonPropertyName("startedAt")]
    public required DateTimeOffset StartedAt { get; init; }

    /// <summary>
    /// The time the build completed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("completedAt")]
    public DateTimeOffset? CompletedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
