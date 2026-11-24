using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;
using AmazonVpc.Models.Enums;

namespace AmazonVpc.Models;

public record Attachment
{
    /// <summary>
    /// The current state of the attachment
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// The ID of the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcId")]
    public string? VpcId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
