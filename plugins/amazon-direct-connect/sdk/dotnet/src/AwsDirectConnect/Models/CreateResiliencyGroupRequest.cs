using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record CreateResiliencyGroupRequest
{
    /// <summary>
    /// The name of the resiliency group.
    /// </summary>
    [JsonPropertyName("resiliencyGroupName")]
    public required string ResiliencyGroupName { get; init; }

    /// <summary>
    /// The resiliency model that the resiliency group is intended to meet. The valid values are maximum-resiliency, high-resiliency, and basic-resiliency.
    /// </summary>
    [JsonPropertyName("intendedResiliencyModel")]
    public required IntendedResiliencyModel IntendedResiliencyModel { get; init; }

    /// <summary>
    /// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientToken")]
    public string? ClientToken { get; init; }

    /// <summary>
    /// The tags to associate with the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
