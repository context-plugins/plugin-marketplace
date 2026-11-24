using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If <c>schedule_start_date</c> and start_time_of_day are in the past relative to the job's creation time, the transfer starts the day after you schedule the transfer request. <b>Note:</b> When starting jobs at or near midnight UTC it is possible that a job starts later than expected. For example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it creates a TransferJob with <c>schedule_start_date</c> set to June 2 and a <c>start_time_of_day</c> set to midnight UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.
/// </summary>
public record Date3
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
