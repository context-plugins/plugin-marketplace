using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Models;
using AmazonFreeRtos.Models.Enums;

namespace AmazonFreeRtos.Models;

public record CreateOtaUpdateRequest
{
    [JsonPropertyName("otaUpdateId")]
    public required string OtaUpdateId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("targets")]
    public required IReadOnlyList<string> Targets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocols")]
    public IReadOnlyList<string>? Protocols { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("targetSelection")]
    public TargetSelection? TargetSelection { get; init; }

    [JsonPropertyName("files")]
    public required IReadOnlyList<object> Files { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("roleArn")]
    public string? RoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyDictionary<string, string>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
