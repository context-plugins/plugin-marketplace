using System.Text.Json.Serialization;
using AmazonVpc.Core.Models;

namespace AmazonVpc.Models;

/// <summary>
/// Response from the CreateRouteTable action
/// </summary>
public record CreateRouteTableResponse
{
    /// <summary>
    /// Describes a route table
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeTable")]
    public RouteTable? RouteTable { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
