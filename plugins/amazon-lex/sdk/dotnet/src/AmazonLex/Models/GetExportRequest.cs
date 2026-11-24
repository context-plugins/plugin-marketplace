using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record GetExportRequest
{
    /// <summary>
    /// The name of the bot to export.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The version of the bot to export.
    /// </summary>
    [JsonPropertyName("version")]
    public required string Version { get; init; }

    /// <summary>
    /// The type of resource to export.
    /// </summary>
    [JsonPropertyName("resourceType")]
    public required ResourceType ResourceType { get; init; }

    /// <summary>
    /// The format of the exported data.
    /// </summary>
    [JsonPropertyName("exportType")]
    public required ExportType ExportType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
