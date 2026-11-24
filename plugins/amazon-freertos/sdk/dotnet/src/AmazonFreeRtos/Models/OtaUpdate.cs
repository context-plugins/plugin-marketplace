using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonFreeRtos.Core.Models;
using AmazonFreeRtos.Models.Enums;

namespace AmazonFreeRtos.Models;

/// <summary>
/// An over-the-air (OTA) firmware update job for FreeRTOS devices.
/// </summary>
public record OtaUpdate
{
    [JsonPropertyName("otaUpdateId")]
    public required string OtaUpdateId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otaUpdateArn")]
    public string? OtaUpdateArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otaUpdateStatus")]
    public OtaUpdateStatus? OtaUpdateStatus { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    [JsonPropertyName("targets")]
    public required IReadOnlyList<string> Targets { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("protocols")]
    public IReadOnlyList<Protocol>? Protocols { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDate")]
    public DateTimeOffset? CreationDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedDate")]
    public DateTimeOffset? LastModifiedDate { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsIotJobId")]
    public string? AwsIotJobId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsIotJobArn")]
    public string? AwsIotJobArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
