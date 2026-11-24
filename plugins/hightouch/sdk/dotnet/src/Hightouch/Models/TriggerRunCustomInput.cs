using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Hightouch.Core.Models;

namespace Hightouch.Models;

/// <summary>
/// The input of a trigger action to run syncs based on sync ID, slug or other filters
/// </summary>
public record TriggerRunCustomInput
{
    /// <summary>
    /// Trigger run based on sync slug
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncSlug")]
    public string? SyncSlug { get; init; }

    /// <summary>
    /// Trigger run based on sync id
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncId")]
    [RegularExpression("^[0-9]+$")]
    public string? SyncId { get; init; }

    /// <summary>
    /// Whether to clear the audience and then sync the full query to the destination
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clearAndFill")]
    public bool? ClearAndFill { get; init; } = false;

    /// <summary>
    /// Whether to sync all the rows in the query without executing changes on the destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resetCDC")]
    public bool? ResetCdc { get; init; } = false;

    /// <summary>
    /// Whether to resync all the rows in the query (i.e. ignoring previously
    /// synced rows).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullResync")]
    public bool? FullResync { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
