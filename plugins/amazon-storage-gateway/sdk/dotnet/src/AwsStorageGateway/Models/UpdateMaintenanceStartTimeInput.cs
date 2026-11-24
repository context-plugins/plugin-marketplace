using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record UpdateMaintenanceStartTimeInput
{
    [JsonPropertyName("GatewayARN")]
    public required string GatewayArn { get; init; }

    /// <summary>
    /// The hour component of the maintenance start time represented as hh, where hh is the hour (00 to 23). The hour of the day is in the time zone of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("HourOfDay")]
    public int? HourOfDay { get; init; }

    /// <summary>
    /// The minute component of the maintenance start time represented as mm, where mm is the minute (00 to 59). The minute of the hour is in the time zone of the gateway.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("MinuteOfHour")]
    public int? MinuteOfHour { get; init; }

    /// <summary>
    /// The day of the week component of the maintenance start time week represented as an ordinal number from 0 to 6, where 0 represents Sunday and 6 represents Saturday.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DayOfWeek")]
    public int? DayOfWeek { get; init; }

    /// <summary>
    /// The day of the month component of the maintenance start time represented as an ordinal number from 1 to 28, where 1 represents the first day of the month. It is not possible to set the maintenance schedule to start on days 29 through 31.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DayOfMonth")]
    public int? DayOfMonth { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("SoftwareUpdatePreferences")]
    public SoftwareUpdatePreferences? SoftwareUpdatePreferences { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
