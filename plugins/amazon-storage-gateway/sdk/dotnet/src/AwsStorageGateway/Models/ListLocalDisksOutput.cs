using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;

namespace AwsStorageGateway.Models;

public record ListLocalDisksOutput
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GatewayARN")]
    public string? GatewayArn { get; init; }

    /// <summary>
    /// A JSON object containing the following fields: ListLocalDisksOutput$Disks
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("Disks")]
    public IReadOnlyList<Disk>? Disks { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
