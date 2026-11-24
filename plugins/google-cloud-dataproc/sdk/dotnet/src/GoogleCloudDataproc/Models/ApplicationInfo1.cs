using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Output only. High level information corresponding to an application.
/// </summary>
public record ApplicationInfo1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attempts")]
    public IReadOnlyList<ApplicationAttemptInfo>? Attempts { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationId")]
    public string? ApplicationId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coresPerExecutor")]
    public int? CoresPerExecutor { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("quantileDataStatus")]
    public QuantileDataStatus? QuantileDataStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("memoryPerExecutorMb")]
    public int? MemoryPerExecutorMb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("applicationContextIngestionStatus")]
    public ApplicationContextIngestionStatus? ApplicationContextIngestionStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("coresGranted")]
    public int? CoresGranted { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxCores")]
    public int? MaxCores { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
