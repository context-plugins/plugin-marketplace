using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record CreateIteration
{
    /// <summary>
    /// An array of UUIDs for any Members you want to add as Followers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids")]
    public IReadOnlyList<Guid>? FollowerIds { get; init; }

    /// <summary>
    /// An array of UUIDs for any Groups you want to add as Followers. Currently, only one Group association is presented in our web UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("group_ids")]
    public IReadOnlyList<Guid>? GroupIds { get; init; }

    /// <summary>
    /// An array of Labels attached to the Iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyList<CreateLabelParams>? Labels { get; init; }

    /// <summary>
    /// The description of the Iteration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(100000)]
    public string? Description { get; init; }

    /// <summary>
    /// The name of this Iteration.
    /// </summary>
    [JsonPropertyName("name")]
    [StringLength(256, MinimumLength = 1)]
    public required string Name { get; init; }

    /// <summary>
    /// The date this Iteration begins, e.g. 2019-07-01.
    /// </summary>
    [JsonPropertyName("start_date")]
    [MinLength(1)]
    public required string StartDate { get; init; }

    /// <summary>
    /// The date this Iteration ends, e.g. 2019-07-01.
    /// </summary>
    [JsonPropertyName("end_date")]
    [MinLength(1)]
    public required string EndDate { get; init; }
}
