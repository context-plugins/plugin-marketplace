using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record AwsIamConfig
{
    /// <summary>
    /// The signing Amazon Web Services Region for IAM authorization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signingRegion")]
    public string? SigningRegion { get; init; }

    /// <summary>
    /// The signing service name for IAM authorization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("signingServiceName")]
    public string? SigningServiceName { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
