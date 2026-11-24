using System.Text.Json.Serialization;
using GoogleCloudStorageTransferService.Core.Models;

namespace GoogleCloudStorageTransferService.Models;

/// <summary>
/// The time in UTC that no further transfer operations are scheduled. Combined with schedule_end_date, <c>end_time_of_day</c> specifies the end date and time for starting new transfer operations. This field must be greater than or equal to the timestamp corresponding to the combination of schedule_start_date and start_time_of_day, and is subject to the following: * If <c>end_time_of_day</c> is not set and <c>schedule_end_date</c> is set, then a default value of <c>23:59:59</c> is used for <c>end_time_of_day</c>. * If <c>end_time_of_day</c> is set and <c>schedule_end_date</c> is not set, then INVALID_ARGUMENT is returned.
/// </summary>
public record TimeOfDay1
{
    /// <summary>
    /// Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minutes")]
    public int? Minutes { get; init; }

    /// <summary>
    /// Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hours")]
    public int? Hours { get; init; }

    /// <summary>
    /// Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seconds")]
    public int? Seconds { get; init; }

    /// <summary>
    /// Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nanos")]
    public int? Nanos { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
