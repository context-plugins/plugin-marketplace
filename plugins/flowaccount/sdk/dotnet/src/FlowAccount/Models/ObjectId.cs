using System;
using System.Text.Json.Serialization;

namespace FlowAccount.Models;

/// <summary>
/// Represents an ObjectId (see also BsonObjectId).
/// </summary>
public record ObjectId
{
    /// <summary>
    /// Gets the timestamp.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Timestamp")]
    public int? Timestamp { get; init; }

    /// <summary>
    /// Gets the machine.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Machine")]
    public int? Machine { get; init; }

    /// <summary>
    /// Gets the PID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Pid")]
    public int? Pid { get; init; }

    /// <summary>
    /// Gets the increment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Increment")]
    public int? Increment { get; init; }

    /// <summary>
    /// Gets the creation time (derived from the timestamp).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("CreationTime")]
    public DateTimeOffset? CreationTime { get; init; }
}
