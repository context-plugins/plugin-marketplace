using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The configuration of scheduled backup for the metastore service.
/// </summary>
public record ScheduledBackup2
{
    /// <summary>
    /// Output only. The details of the latest scheduled backup.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("latestBackup")]
    public LatestBackup2? LatestBackup { get; init; }

    /// <summary>
    /// Optional. Defines whether the scheduled backup is enabled. The default value is false.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Optional. The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cronSchedule")]
    public string? CronSchedule { get; init; }

    /// <summary>
    /// Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeZone")]
    public string? TimeZone { get; init; }

    /// <summary>
    /// Optional. A Cloud Storage URI of a folder, in the format gs:///. A sub-folder containing backup files will be stored below it.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("backupLocation")]
    public string? BackupLocation { get; init; }

    /// <summary>
    /// Output only. The time when the next backups execution is scheduled to start.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextScheduledTime")]
    public string? NextScheduledTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
