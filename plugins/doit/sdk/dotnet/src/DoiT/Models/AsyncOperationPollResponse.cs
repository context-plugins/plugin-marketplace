using System;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Response envelope for polling an async report operation. Does not include result data — once status is "succeeded", fetch the result from the operation's results endpoint.
/// </summary>
public record AsyncOperationPollResponse
{
    /// <summary>
    /// Unique identifier for the operation.
    /// </summary>
    [JsonPropertyName("operationId")]
    public required string OperationId { get; init; }

    /// <summary>
    /// Current lifecycle status of the operation.
    /// </summary>
    [JsonPropertyName("status")]
    public required StatusDoiTReportsApi Status { get; init; }

    /// <summary>
    /// Time the operation was created.
    /// </summary>
    [JsonPropertyName("createTime")]
    public required DateTimeOffset CreateTime { get; init; }

    /// <summary>
    /// Time after which the operation record may be deleted.
    /// </summary>
    [JsonPropertyName("expireBy")]
    public required DateTimeOffset ExpireBy { get; init; }

    /// <summary>
    /// Error describing why an async operation failed. Present only when status is "failed".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("error")]
    public AsyncOperationError? Error { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
