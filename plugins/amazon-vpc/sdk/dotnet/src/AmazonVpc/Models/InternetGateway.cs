using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Describes an internet gateway
/// </summary>
public record InternetGateway
{
    /// <summary>
    /// The ID of the internet gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internetGatewayId")]
    public string? InternetGatewayId { get; init; }

    /// <summary>
    /// Any VPCs attached to the internet gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachments")]
    public IReadOnlyList<Attachment>? Attachments { get; init; }

    /// <summary>
    /// The ID of the AWS account that owns the internet gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerId")]
    public string? OwnerId { get; init; }

    /// <summary>
    /// Any tags assigned to the internet gateway
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
