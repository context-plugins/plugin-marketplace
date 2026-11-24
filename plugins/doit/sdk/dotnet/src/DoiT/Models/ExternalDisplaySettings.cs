using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Display settings for the report.
/// </summary>
public record ExternalDisplaySettings
{
    /// <summary>
    /// Identifier of the theme applied to the report. The reserved
    /// sentinel <c>"default"</c> is returned on GET when no theme is stored
    /// and clears the stored value on PATCH. Omit the field on PATCH
    /// to leave the stored value unchanged.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("themeId")]
    public string? ThemeId { get; init; } = "default";

    /// <summary>
    /// Font size used for data labels on charts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataLabelFontSize")]
    public DataLabelFontSize? DataLabelFontSize { get; init; }

    /// <summary>
    /// Font size used for axis labels on charts.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("axisLabelFontSize")]
    public AxisLabelFontSize? AxisLabelFontSize { get; init; }

    /// <summary>
    /// Scale applied to numeric values when rendering the report.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("numberScale")]
    public NumberScale? NumberScale { get; init; }

    /// <summary>
    /// Number of decimal places shown for numeric values.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("decimalPrecision")]
    [Minimum(0)]
    [Maximum(8)]
    public int? DecimalPrecision { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
