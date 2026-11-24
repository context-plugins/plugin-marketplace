using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Shortcut.Models;

public record UpdateProject
{
    /// <summary>
    /// The Project's description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    [MaxLength(100000)]
    public string? Description { get; init; }

    /// <summary>
    /// A true/false boolean indicating whether the Story is in archived state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archived")]
    public bool? Archived { get; init; }

    /// <summary>
    /// The number of days before the thermometer appears in the Story summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("days_to_thermometer")]
    public long? DaysToThermometer { get; init; }

    /// <summary>
    /// The color that represents the Project in the UI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("color")]
    [MinLength(1)]
    [RegularExpression("^#[a-fA-F0-9]{6}$")]
    public string? Color { get; init; }

    /// <summary>
    /// The Project's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [StringLength(128, MinimumLength = 1)]
    public string? Name { get; init; }

    /// <summary>
    /// An array of UUIDs for any Members you want to add as Followers.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("follower_ids")]
    public IReadOnlyList<Guid>? FollowerIds { get; init; }

    /// <summary>
    /// Configuration to enable or disable thermometers in the Story summary.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("show_thermometer")]
    public bool? ShowThermometer { get; init; }

    /// <summary>
    /// The ID of the team the project belongs to.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("team_id")]
    public long? TeamId { get; init; }

    /// <summary>
    /// The Project abbreviation used in Story summaries. Should be kept to 3 characters at most.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("abbreviation")]
    public string? Abbreviation { get; init; }
}
