using System.Text.Json.Serialization;
using ApiVerve.Core.Models;

namespace ApiVerve.Models;

public record V1BarcodegeneratorRequest
{
    /// <summary>
    /// The data you want to generate a barcode from (string)
    /// </summary>
    [JsonPropertyName("data")]
    public required string Data { get; init; }

    /// <summary>
    /// The type of barcode you want to generate
    /// </summary>
    [JsonPropertyName("type")]
    public required string Type { get; init; }

    /// <summary>
    /// The color of the barcode (default: #000000)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lineColor")]
    public string? LineColor { get; init; }

    /// <summary>
    /// The background color of the barcode (default: #ffffff)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backgroundColor")]
    public string? BackgroundColor { get; init; }

    /// <summary>
    /// Whether to display the value below the barcode (default: true)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayValue")]
    public bool? DisplayValue { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
