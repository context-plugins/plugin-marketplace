using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;
using AwsCodeBuild.Models.Enums;

namespace AwsCodeBuild.Models;

public record RetryBuildBatchInput
{
    /// <summary>
    /// Specifies the identifier of the batch build to restart.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuildBatch request. The token is included in the RetryBuildBatch request and is valid for five minutes. If you repeat the RetryBuildBatch request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotencyToken")]
    public string? IdempotencyToken { get; init; }

    /// <summary>
    /// Specifies the type of retry to perform.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("retryType")]
    public RetryType? RetryType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
