using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Describes a route table
/// </summary>
public record RouteTable
{
    /// <summary>
    /// The ID of the route table
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeTableId")]
    public string? RouteTableId { get; init; }

    /// <summary>
    /// The ID of the VPC
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("vpcId")]
    public string? VpcId { get; init; }

    /// <summary>
    /// The routes in the route table
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routes")]
    public IReadOnlyList<Route>? Routes { get; init; }

    /// <summary>
    /// The associations between the route table and subnets or gateways
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associations")]
    public IReadOnlyList<Association>? Associations { get; init; }

    /// <summary>
    /// The ID of the AWS account that owns the route table
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerId")]
    public string? OwnerId { get; init; }

    /// <summary>
    /// Any tags assigned to the route table
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
