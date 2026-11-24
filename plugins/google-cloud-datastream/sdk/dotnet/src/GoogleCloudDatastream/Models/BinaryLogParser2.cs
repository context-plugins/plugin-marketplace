using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Use Binary Log Parser.
/// </summary>
public record BinaryLogParser2
{
    /// <summary>
    /// Use Oracle directories.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logFileDirectories")]
    public LogFileDirectories2? LogFileDirectories { get; init; }

    /// <summary>
    /// Use Oracle ASM.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleAsmLogFileAccess")]
    public object? OracleAsmLogFileAccess { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
