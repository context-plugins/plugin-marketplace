using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Models;

namespace GoogleCloudTalentSolution.Models;

/// <summary>
/// Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and <c>google.protobuf.Timestamp</c>.
/// </summary>
public record TimeOfDay
{
    /// <summary>
    /// Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("seconds")]
    public int? Seconds { get; init; }

    /// <summary>
    /// Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minutes")]
    public int? Minutes { get; init; }

    /// <summary>
    /// Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nanos")]
    public int? Nanos { get; init; }

    /// <summary>
    /// Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hours")]
    public int? Hours { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
