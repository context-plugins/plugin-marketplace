using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1WebsitetopdfRequest
{
    /// <summary>
    /// The URL of the website to convert to PDF
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    /// <summary>
    /// The top margin of the PDF in inches (e.g., 0.4)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marginTop")]
    public double? MarginTop { get; init; }

    /// <summary>
    /// The right margin of the PDF in inches (e.g., 0.4)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marginRight")]
    public double? MarginRight { get; init; }

    /// <summary>
    /// The bottom margin of the PDF in inches (e.g., 0.4)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marginBottom")]
    public double? MarginBottom { get; init; }

    /// <summary>
    /// The left margin of the PDF in inches (e.g., 0.4)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("marginLeft")]
    public double? MarginLeft { get; init; }

    /// <summary>
    /// Set to true for landscape orientation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("landscape")]
    public bool? Landscape { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
