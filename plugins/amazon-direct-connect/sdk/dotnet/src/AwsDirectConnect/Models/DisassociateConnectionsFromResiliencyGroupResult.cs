using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DisassociateConnectionsFromResiliencyGroupResult
{
    /// <summary>
    /// The connection associations for the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroupAssociations")]
    public IReadOnlyList<ResiliencyGroupAssociation>? ResiliencyGroupAssociations { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
