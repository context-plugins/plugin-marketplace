using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record ErrorMetric
{
    /// <summary>
    /// The Forecast type used to compute WAPE, MAPE, MASE, and RMSE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ForecastType")]
    public string? ForecastType { get; init; }

    /// <summary>
    /// The weighted absolute percentage error (WAPE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("WAPE")]
    public double? Wape { get; init; }

    /// <summary>
    /// The root-mean-square error (RMSE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("RMSE")]
    public double? Rmse { get; init; }

    /// <summary>
    /// The Mean Absolute Scaled Error (MASE)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MASE")]
    public double? Mase { get; init; }

    /// <summary>
    /// The Mean Absolute Percentage Error (MAPE)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MAPE")]
    public double? Mape { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
