using System.Text.Json.Serialization;
using Airtable.Core.Models;
using Airtable.Models.Enums;

namespace Airtable.Models;

/// <summary>
/// Summary information about an Airtable base.
/// </summary>
public record BaseSummary
{
    /// <summary>
    /// The unique identifier of the base (starts with 'app').
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// The name of the base.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The permission level the authenticated user has on this base.
    /// </summary>
    [JsonPropertyName("permissionLevel")]
    public required PermissionLevel PermissionLevel { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
