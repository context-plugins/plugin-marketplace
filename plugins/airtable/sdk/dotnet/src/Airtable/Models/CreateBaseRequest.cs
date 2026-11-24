using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

/// <summary>
/// Request body for creating a new base.
/// </summary>
public record CreateBaseRequest
{
    /// <summary>
    /// The name of the new base.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The ID of the workspace where the base will be created (starts with 'wsp').
    /// </summary>
    [JsonPropertyName("workspaceId")]
    public required string WorkspaceId { get; init; }

    /// <summary>
    /// The initial table definitions for the base.
    /// </summary>
    [JsonPropertyName("tables")]
    [MinLength(1)]
    public required IReadOnlyList<Table> Tables { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
