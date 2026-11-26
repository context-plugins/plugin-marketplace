using System;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;
using Dynamics365BusinessCentral.Models.Enums;

namespace Dynamics365BusinessCentral.Models;

public record Extension
{
    /// <summary>
    /// The extension ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// The package ID used for install/uninstall operations
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("packageId")]
    public Guid? PackageId { get; init; }

    /// <summary>
    /// The extension display name
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// The extension publisher
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publisher")]
    public string? Publisher { get; init; }

    /// <summary>
    /// Major version number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionMajor")]
    public int? VersionMajor { get; init; }

    /// <summary>
    /// Minor version number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionMinor")]
    public int? VersionMinor { get; init; }

    /// <summary>
    /// Build version number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionBuild")]
    public int? VersionBuild { get; init; }

    /// <summary>
    /// Revision version number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("versionRevision")]
    public int? VersionRevision { get; init; }

    /// <summary>
    /// Whether the extension is currently installed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isInstalled")]
    public bool? IsInstalled { get; init; }

    /// <summary>
    /// How the extension was published
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("publishedAs")]
    public PublishedAs? PublishedAs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
