using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DisassociateConnectionsFromResiliencyGroupRequest
{
    /// <summary>
    /// The IDs or ARNs of the connections to disassociate from the resiliency group.
    /// </summary>
    [JsonPropertyName("connectionIdentifiers")]
    public required IReadOnlyList<string> ConnectionIdentifiers { get; init; }

    /// <summary>
    /// The ID of the resiliency group.
    /// </summary>
    [JsonPropertyName("resiliencyGroupId")]
    public required string ResiliencyGroupId { get; init; }

    /// <summary>
    /// A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("clientToken")]
    public string? ClientToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
