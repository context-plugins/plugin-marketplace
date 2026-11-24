using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsStorageGateway.Core.Models;
using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Models;

public record StorageGatewayError
{
    /// <summary>
    /// Additional information about the error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorCode")]
    public ErrorCode? ErrorCode { get; init; }

    /// <summary>
    /// Human-readable text that provides detail about the error that occurred.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public IReadOnlyDictionary<string, string>? ErrorDetails { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
