using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record RetryBuildInput
{
    /// <summary>
    /// Specifies the identifier of the build to restart.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    /// <summary>
    /// A unique, case sensitive identifier you provide to ensure the idempotency of the RetryBuild request. The token is included in the RetryBuild request and is valid for five minutes. If you repeat the RetryBuild request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("idempotencyToken")]
    public string? IdempotencyToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
