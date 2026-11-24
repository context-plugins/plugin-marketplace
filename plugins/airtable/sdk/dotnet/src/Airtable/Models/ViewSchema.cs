using System.Collections.Generic;
using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Models.Enums;

namespace Airtable.Models;

/// <summary>
/// The schema definition of a view within a table.
/// </summary>
public record ViewSchema
{
    /// <summary>
    /// The unique identifier of the view (starts with 'viw').
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the view.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The type of the view.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type1 Type { get; init; }

    /// <summary>
    /// If set, this is a personal view only visible to the specified user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("personalForUserId")]
    public string? PersonalForUserId { get; init; }

    /// <summary>
    /// The IDs of fields visible in this view. Only included if visibleFieldIds is requested via the include parameter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("visibleFieldIds")]
    public IReadOnlyList<string>? VisibleFieldIds { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
