using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

/// <summary>
/// Summary of a cloud account (layer) connected to a diagram.
/// </summary>
public record CloudDiagramSchemeStatussheetInfo
{
    /// <summary>
    /// Layer ID.
    /// </summary>
    [JsonPropertyName("ssid")]
    public required string Ssid { get; init; }

    /// <summary>
    /// Layer name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Connected cloud account name.
    /// </summary>
    [JsonPropertyName("account_name")]
    public required string AccountName { get; init; }

    /// <summary>
    /// Number of active alarms.
    /// </summary>
    [JsonPropertyName("alarms_count")]
    public required int AlarmsCount { get; init; }

    /// <summary>
    /// True when the layer contains no components.
    /// </summary>
    [JsonPropertyName("empty")]
    public required bool Empty { get; init; }

    /// <summary>
    /// Layer color.
    /// </summary>
    [JsonPropertyName("color")]
    public required string Color { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
