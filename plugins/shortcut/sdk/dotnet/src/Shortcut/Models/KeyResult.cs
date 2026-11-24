using System;
using System.Text.Json.Serialization;
using Shortcut.Models.Enums;

namespace Shortcut.Models;

public record KeyResult
{
    /// <summary>
    /// The ID of the Key Result.
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// The name of the Key Result.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The Objective to which this Key Result belongs.
    /// </summary>
    [JsonPropertyName("objective_id")]
    public required long ObjectiveId { get; init; }

    /// <summary>
    /// The type of the Key Result (numeric, percent, or boolean).
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeEnum Type { get; init; }

    /// <summary>
    /// The starting value of the Key Result.
    /// </summary>
    [JsonPropertyName("initial_observed_value")]
    public required KeyResultValue InitialObservedValue { get; init; }

    /// <summary>
    /// The starting value of the Key Result.
    /// </summary>
    [JsonPropertyName("current_observed_value")]
    public required KeyResultValue CurrentObservedValue { get; init; }

    /// <summary>
    /// The starting value of the Key Result.
    /// </summary>
    [JsonPropertyName("current_target_value")]
    public required KeyResultValue CurrentTargetValue { get; init; }

    /// <summary>
    /// The integer percentage of progress toward completion of the Key Result.
    /// </summary>
    [JsonPropertyName("progress")]
    public required long Progress { get; init; }
}
