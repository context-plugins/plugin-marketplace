using System.Collections.Generic;
using System.Text.Json.Serialization;
using DoiT.Core.Models;

namespace DoiT.Models;

public record AnalyticsV1SettingsThemesResponse
{
    /// <summary>
    /// Total number of custom themes in the result set.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("rowCount")]
    public int? RowCount { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("themes")]
    public IReadOnlyList<CustomTheme>? Themes { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
