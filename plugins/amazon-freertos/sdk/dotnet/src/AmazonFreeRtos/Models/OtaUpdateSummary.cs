using System;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Models;

namespace AmazonFreeRtos.Models;

/// <summary>
/// Summary of an OTA update.
/// </summary>
public record OtaUpdateSummary
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otaUpdateId")]
    public string? OtaUpdateId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otaUpdateArn")]
    public string? OtaUpdateArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDate")]
    public DateTimeOffset? CreationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
