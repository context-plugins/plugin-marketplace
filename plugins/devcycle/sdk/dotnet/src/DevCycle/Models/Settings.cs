using System.Text.Json.Serialization;
using DevCycle.Core.Models;
using DevCycle.Models.Enums;

namespace DevCycle.Models;

public record Settings
{
    /// <summary>
    /// Project ID
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_project")]
    public string? Project { get; init; }

    /// <summary>
    /// Whether opt-in is enabled for this project
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Title for the opt-in UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    public string? Title { get; init; }

    /// <summary>
    /// Description for the opt-in UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Image URL for the opt-in UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("imageURL")]
    public string? ImageUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("colors")]
    public Colors? Colors { get; init; }

    /// <summary>
    /// Alignment for "powered by" text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("poweredByAlignment")]
    public PoweredByAlignment? PoweredByAlignment { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
