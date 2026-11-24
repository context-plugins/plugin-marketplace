using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record Route
{
    /// <summary>
    /// The CIDR (prefix) of the route.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cidr")]
    public string? Cidr { get; init; }

    /// <summary>
    /// The direction of the route. The valid values are accepted (received from the customer network) and advertised (advertised to the customer network).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeDirection")]
    public RouteDirection1? RouteDirection { get; init; }

    /// <summary>
    /// The address family of the route. The valid values are ipv4 and ipv6.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("addressFamily")]
    public AddressFamily6? AddressFamily { get; init; }

    /// <summary>
    /// The autonomous system (AS) path of the route.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("asPath")]
    public IReadOnlyList<AsPathSegment>? AsPath { get; init; }

    /// <summary>
    /// The BGP communities associated with the route.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("communities")]
    public IReadOnlyList<string>? Communities { get; init; }

    /// <summary>
    /// The Direct Connect endpoint that terminates the logical connection. This device might be different than the device that terminates the physical connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("awsLogicalDeviceId")]
    public string? AwsLogicalDeviceId { get; init; }

    /// <summary>
    /// The time when the route was installed. The value is displayed in UTC format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("routeInstalledAt")]
    public DateTimeOffset? RouteInstalledAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
