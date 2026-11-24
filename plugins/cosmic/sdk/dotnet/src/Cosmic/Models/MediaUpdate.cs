using System.Text.Json.Serialization;

namespace Cosmic.Models;

/// <summary>
/// Only the properties sent are changed. The underlying file cannot be replaced through this endpoint.
/// </summary>
public record MediaUpdate
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("folder")]
    public string? Folder { get; init; }

    /// <summary>
    /// Images only.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alt_text")]
    public string? AltText { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("metadata")]
    public object? Metadata { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("trigger_webhook")]
    public bool? TriggerWebhook { get; init; }
}
