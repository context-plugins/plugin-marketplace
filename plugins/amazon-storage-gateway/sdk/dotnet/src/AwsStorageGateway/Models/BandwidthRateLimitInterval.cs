using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record BandwidthRateLimitInterval
{
    /// <summary>
    /// The hour of the day to start the bandwidth rate limit interval.
    /// </summary>
    [JsonPropertyName("StartHourOfDay")]
    public required int StartHourOfDay { get; init; }

    /// <summary>
    /// The minute of the hour to start the bandwidth rate limit interval. The interval begins at the start of that minute. To begin an interval exactly at the start of the hour, use the value 0.
    /// </summary>
    [JsonPropertyName("StartMinuteOfHour")]
    public required int StartMinuteOfHour { get; init; }

    /// <summary>
    /// The hour of the day to end the bandwidth rate limit interval.
    /// </summary>
    [JsonPropertyName("EndHourOfDay")]
    public required int EndHourOfDay { get; init; }

    /// <summary>
    /// The minute of the hour to end the bandwidth rate limit interval. The bandwidth rate limit interval ends at the end of the minute. To end an interval at the end of an hour, use the value 59.
    /// </summary>
    [JsonPropertyName("EndMinuteOfHour")]
    public required int EndMinuteOfHour { get; init; }

    /// <summary>
    /// The days of the week component of the bandwidth rate limit interval, represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
    /// </summary>
    [JsonPropertyName("DaysOfWeek")]
    public required IReadOnlyList<int> DaysOfWeek { get; init; }

    /// <summary>
    /// The average upload rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the upload rate limit is not set. For Tape Gateway and Volume Gateway, the minimum value is 51200. This field is required for S3 File Gateway, and the minimum value is 104857600.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageUploadRateLimitInBitsPerSec")]
    public int? AverageUploadRateLimitInBitsPerSec { get; init; }

    /// <summary>
    /// The average download rate limit component of the bandwidth rate limit interval, in bits per second. This field does not appear in the response if the download rate limit is not set. S3 File Gateway does not support this feature.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("AverageDownloadRateLimitInBitsPerSec")]
    public int? AverageDownloadRateLimitInBitsPerSec { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
