using System.Text.Json.Serialization;
using AwsXRay.Core.Models;

namespace AwsXRay.Models;

public record UpdateGroupRequest
{
    /// <summary>
    /// The case-sensitive name of the group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupName")]
    public string? GroupName { get; init; }

    /// <summary>
    /// The ARN that was generated upon creation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("GroupARN")]
    public string? GroupArn { get; init; }

    /// <summary>
    /// The updated filter expression defining criteria by which to group traces.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("FilterExpression")]
    public string? FilterExpression { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("InsightsConfiguration")]
    public InsightsConfiguration? InsightsConfiguration { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
