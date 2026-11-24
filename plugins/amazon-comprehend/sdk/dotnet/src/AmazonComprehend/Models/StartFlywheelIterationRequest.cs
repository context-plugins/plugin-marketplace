using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record StartFlywheelIterationRequest
{
    /// <summary>
    /// The ARN of the flywheel.
    /// </summary>
    [JsonPropertyName("FlywheelArn")]
    public required string FlywheelArn { get; init; }

    /// <summary>
    /// A unique identifier for the request. If you don't set the client request token, Amazon Comprehend generates one.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ClientRequestToken")]
    public string? ClientRequestToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
