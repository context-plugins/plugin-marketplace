using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateResiliencyGroupRequest
{
    /// <summary>
    /// The ID of the resiliency group.
    /// </summary>
    [JsonPropertyName("resiliencyGroupId")]
    public required string ResiliencyGroupId { get; init; }

    /// <summary>
    /// The new name of the resiliency group.
    /// </summary>
    [JsonPropertyName("resiliencyGroupName")]
    public required string ResiliencyGroupName { get; init; }

    /// <summary>
    /// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientToken")]
    public string? ClientToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
