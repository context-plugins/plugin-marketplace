using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Models;

namespace AwsCodeBuild.Models;

public record AutoRetryConfig
{
    /// <summary>
    /// The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry your build for up to 2 additional times.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoRetryLimit")]
    public int? AutoRetryLimit { get; init; }

    /// <summary>
    /// The number of times that the build has been retried. The initial build will have an auto-retry number of 0.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("autoRetryNumber")]
    public int? AutoRetryNumber { get; init; }

    /// <summary>
    /// The build ARN of the auto-retried build triggered by the current build. The next auto-retry will be null for builds that don't trigger an auto-retry.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextAutoRetry")]
    public string? NextAutoRetry { get; init; }

    /// <summary>
    /// The build ARN of the build that triggered the current auto-retry build. The previous auto-retry will be null for the initial build.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previousAutoRetry")]
    public string? PreviousAutoRetry { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
