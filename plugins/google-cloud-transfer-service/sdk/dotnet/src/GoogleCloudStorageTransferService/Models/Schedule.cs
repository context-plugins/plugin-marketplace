using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// Transfers can be scheduled to recur or to run just once.
/// </summary>
public record Schedule
{
    /// <summary>
    /// Required. The start date of a transfer. Date boundaries are determined relative to UTC time. If <c>schedule_start_date</c> and start_time_of_day are in the past relative to the job's creation time, the transfer starts the day after you schedule the transfer request. <b>Note:</b> When starting jobs at or near midnight UTC it is possible that a job starts later than expected. For example, if you send an outbound request on June 1 one millisecond prior to midnight UTC and the Storage Transfer Service server receives the request on June 2, then it creates a TransferJob with <c>schedule_start_date</c> set to June 2 and a <c>start_time_of_day</c> set to midnight UTC. The first scheduled TransferOperation takes place on June 3 at midnight UTC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleStartDate")]
    public Date3? ScheduleStartDate { get; init; }

    /// <summary>
    /// Interval between the start of each scheduled TransferOperation. If unspecified, the default value is 24 hours. This value may not be less than 1 hour.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("repeatInterval")]
    public string? RepeatInterval { get; init; }

    /// <summary>
    /// The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date, <c>end_time_of_day</c> specifies the end date and time for starting new transfer operations. This field must be greater than or equal to the timestamp corresponding to the combination of schedule_start_date and start_time_of_day, and is subject to the following: * If <c>end_time_of_day</c> is not set and <c>schedule_end_date</c> is set, then a default value of <c>23:59:59</c> is used for <c>end_time_of_day</c>. * If <c>end_time_of_day</c> is set and <c>schedule_end_date</c> is not set, then INVALID_ARGUMENT is returned.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTimeOfDay")]
    public TimeOfDay1? EndTimeOfDay { get; init; }

    /// <summary>
    /// The time in UTC that a transfer job is scheduled to run. Transfers may start later than this time. If <c>start_time_of_day</c> is not specified: * One-time transfers run immediately. * Recurring transfers run immediately, and each day at midnight UTC, through schedule_end_date. If <c>start_time_of_day</c> is specified: * One-time transfers run at the specified time. * Recurring transfers run at the specified time each day, through <c>schedule_end_date</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTimeOfDay")]
    public TimeOfDay2? StartTimeOfDay { get; init; }

    /// <summary>
    /// The last day a transfer runs. Date boundaries are determined relative to UTC time. A job runs once per 24 hours within the following guidelines: * If <c>schedule_end_date</c> and schedule_start_date are the same and in the future relative to UTC, the transfer is executed only one time. * If <c>schedule_end_date</c> is later than <c>schedule_start_date</c> and <c>schedule_end_date</c> is in the future relative to UTC, the job runs each day at start_time_of_day through <c>schedule_end_date</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduleEndDate")]
    public Date1? ScheduleEndDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
