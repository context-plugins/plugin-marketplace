using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record UpdateFlywheelRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel to update.
    /// </summary>
    [JsonPropertyName("FlywheelArn")]
    public required string FlywheelArn { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the active model version.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ActiveModelArn")]
    public string? ActiveModelArn { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend permission to access the flywheel data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataAccessRoleArn")]
    public string? DataAccessRoleArn { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DataSecurityConfig")]
    public UpdateDataSecurityConfig? DataSecurityConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
