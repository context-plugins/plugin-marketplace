using System;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record TapeRecoveryPointInfo
{
    /// <summary>
    /// The Amazon Resource Name (ARN) of the virtual tape.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeARN")]
    public string? TapeArn { get; init; }

    /// <summary>
    /// The time when the point-in-time view of the virtual tape was replicated for later recovery. The default timestamp format of the tape recovery point time is in the ISO8601 extended YYYY-MM-DD'T'HH:MM:SS'Z' format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeRecoveryPointTime")]
    public DateTimeOffset? TapeRecoveryPointTime { get; init; }

    /// <summary>
    /// The size, in bytes, of the virtual tapes to recover.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeSizeInBytes")]
    public int? TapeSizeInBytes { get; init; }

    /// <summary>
    /// The status of the virtual tapes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("TapeStatus")]
    public string? TapeStatus { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
