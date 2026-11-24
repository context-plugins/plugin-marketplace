using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record RouteFilters
{
    /// <summary>
    /// The direction of the routes to return. The valid values are accepted (routes received from the customer network) and advertised (routes advertised to the customer network).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeDirection")]
    public RouteDirection? RouteDirection { get; init; }

    /// <summary>
    /// The address family of the routes to return. The valid values are ipv4 and ipv6.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressFamily")]
    public AddressFamily5? AddressFamily { get; init; }

    /// <summary>
    /// The CIDRs (prefixes) used to filter the routes. You can specify up to 10 CIDRs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidrs")]
    public IReadOnlyList<string>? Cidrs { get; init; }

    /// <summary>
    /// The autonomous system (AS) numbers used to filter the routes by their AS path.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asPath")]
    public IReadOnlyList<int>? AsPath { get; init; }

    /// <summary>
    /// The BGP communities used to filter the routes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("communities")]
    public IReadOnlyList<string>? Communities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
