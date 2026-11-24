using System.Text.Json.Serialization;
using AmazonForecast.Core.Models;

namespace AmazonForecast.Models;

public record Statistics
{
    /// <summary>
    /// The number of values in the field. If the response value is -1, refer to CountLong.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Count")]
    public int? Count { get; init; }

    /// <summary>
    /// The number of distinct values in the field. If the response value is -1, refer to CountDistinctLong.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountDistinct")]
    public int? CountDistinct { get; init; }

    /// <summary>
    /// The number of null values in the field. If the response value is -1, refer to CountNullLong.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountNull")]
    public int? CountNull { get; init; }

    /// <summary>
    /// The number of NAN (not a number) values in the field. If the response value is -1, refer to CountNanLong.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountNan")]
    public int? CountNan { get; init; }

    /// <summary>
    /// For a numeric field, the minimum value in the field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Min")]
    public string? Min { get; init; }

    /// <summary>
    /// For a numeric field, the maximum value in the field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Max")]
    public string? Max { get; init; }

    /// <summary>
    /// For a numeric field, the average value in the field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Avg")]
    public double? Avg { get; init; }

    /// <summary>
    /// For a numeric field, the standard deviation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Stddev")]
    public double? Stddev { get; init; }

    /// <summary>
    /// The number of values in the field. CountLong is used instead of Count if the value is greater than 2,147,483,647.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountLong")]
    public int? CountLong { get; init; }

    /// <summary>
    /// The number of distinct values in the field. CountDistinctLong is used instead of CountDistinct if the value is greater than 2,147,483,647.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountDistinctLong")]
    public int? CountDistinctLong { get; init; }

    /// <summary>
    /// The number of null values in the field. CountNullLong is used instead of CountNull if the value is greater than 2,147,483,647.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountNullLong")]
    public int? CountNullLong { get; init; }

    /// <summary>
    /// The number of NAN (not a number) values in the field. CountNanLong is used instead of CountNan if the value is greater than 2,147,483,647.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CountNanLong")]
    public int? CountNanLong { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
