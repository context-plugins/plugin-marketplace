using System.Text.Json.Serialization;
using AmazonComprehend.Core.Models;

namespace AmazonComprehend.Models;

public record UpdateEndpointRequest
{
    /// <summary>
    /// The Amazon Resource Number (ARN) of the endpoint being updated.
    /// </summary>
    [JsonPropertyName("EndpointArn")]
    public required string EndpointArn { get; init; }

    /// <summary>
    /// The ARN of the new model to use when updating an existing endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DesiredModelArn")]
    public string? DesiredModelArn { get; init; }

    /// <summary>
    /// The desired number of inference units to be used by the model using this endpoint. Each inference unit represents of a throughput of 100 characters per second.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DesiredInferenceUnits")]
    public int? DesiredInferenceUnits { get; init; }

    /// <summary>
    /// Data access role ARN to use in case the new model is encrypted with a customer CMK.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("DesiredDataAccessRoleArn")]
    public string? DesiredDataAccessRoleArn { get; init; }

    /// <summary>
    /// The Amazon Resource Number (ARN) of the flywheel
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FlywheelArn")]
    public string? FlywheelArn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
