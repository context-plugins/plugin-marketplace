using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record ResiliencyGroupAssociation
{
    /// <summary>
    /// The ID of the resiliency group.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resiliencyGroupId")]
    public string? ResiliencyGroupId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the associated connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionArn")]
    public string? ConnectionArn { get; init; }

    /// <summary>
    /// The state of the association. The valid values are associating, associated, disassociating, and disassociated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
