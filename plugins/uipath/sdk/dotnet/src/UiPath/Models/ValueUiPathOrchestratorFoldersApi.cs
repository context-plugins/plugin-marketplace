using System;
using System.Text.Json.Serialization;
using UiPath.Core.Models;
using UiPath.Models.Enums;

namespace UiPath.Models;

public record ValueUiPathOrchestratorFoldersApi
{
    /// <summary>
    /// Unique folder identifier used in X-UIPATH-OrganizationUnitId
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Id")]
    public long? Id { get; init; }

    /// <summary>
    /// Unique GUID key for the folder
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Key")]
    public Guid? Key { get; init; }

    /// <summary>
    /// Display name of the folder
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DisplayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Full path of the folder including parent hierarchy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FullyQualifiedName")]
    public string? FullyQualifiedName { get; init; }

    /// <summary>
    /// Type classification of the folder
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FolderType")]
    public FolderType? FolderType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
