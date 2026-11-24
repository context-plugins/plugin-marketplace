using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record DeleteFlywheelRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel to delete.
    /// </summary>
    [JsonPropertyName("FlywheelArn")]
    public required string FlywheelArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
