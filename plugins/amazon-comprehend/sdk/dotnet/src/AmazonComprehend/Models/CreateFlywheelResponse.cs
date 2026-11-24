using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record CreateFlywheelResponse
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelArn")]
    public string? FlywheelArn { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the active model version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveModelArn")]
    public string? ActiveModelArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
