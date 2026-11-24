using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record ResiliencyGroupSummary
{
    /// <summary>
    /// The ID of the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroupId")]
    public string? ResiliencyGroupId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroupArn")]
    public string? ResiliencyGroupArn { get; init; }

    /// <summary>
    /// The name of the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroupName")]
    public string? ResiliencyGroupName { get; init; }

    /// <summary>
    /// The type of the resiliency group. The valid value is Managed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroupType")]
    public ResiliencyGroupType? ResiliencyGroupType { get; init; }

    /// <summary>
    /// The ID of the Amazon Web Services account that owns the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerAccount")]
    public string? OwnerAccount { get; init; }

    /// <summary>
    /// The state of the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State1? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
