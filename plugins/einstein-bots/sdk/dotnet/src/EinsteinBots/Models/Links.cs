using System.Text.Json.Serialization;

namespace EinsteinBots.Models;

/// <summary>
/// List of Einstein Bots API endpoints for HATEOS compliancy.
/// </summary>
public record Links
{
    /// <summary>
    /// Hyperlink object included in the Links schema
    /// </summary>
    [JsonPropertyName("self")]
    public required HyperLink Self { get; init; }

    /// <summary>
    /// Hyperlink object included in the Links schema
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("messages")]
    public HyperLink? Messages { get; init; }

    /// <summary>
    /// Hyperlink object included in the Links schema
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("session")]
    public HyperLink? Session { get; init; }
}
