using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours within the following guidelines: * If <c>schedule_end_date</c> and schedule_start_date are the same and in the future relative to UTC, the transfer is executed only one time. * If <c>schedule_end_date</c> is later than <c>schedule_start_date</c> and <c>schedule_end_date</c> is in the future relative to UTC, the job runs each day at start_time_of_day through <c>schedule_end_date</c>.
/// </summary>
public record Date1
{
    /// <summary>
    /// Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("day")]
    public int? Day { get; init; }

    /// <summary>
    /// Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("month")]
    public int? Month { get; init; }

    /// <summary>
    /// Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public int? Year { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
