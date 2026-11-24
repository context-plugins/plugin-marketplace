using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record VirtualInterfaceTestHistory
{
    /// <summary>
    /// The ID of the virtual interface failover test.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testId")]
    public string? TestId { get; init; }

    /// <summary>
    /// The ID of the tested virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("virtualInterfaceId")]
    public string? VirtualInterfaceId { get; init; }

    /// <summary>
    /// The BGP peers that were put in the DOWN state as part of the virtual interface failover test.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bgpPeers")]
    public IReadOnlyList<string>? BgpPeers { get; init; }

    /// <summary>
    /// The status of the virtual interface failover test.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// The owner ID of the tested virtual interface.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ownerAccount")]
    public string? OwnerAccount { get; init; }

    /// <summary>
    /// The time that the virtual interface failover test ran in minutes.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testDurationInMinutes")]
    public int? TestDurationInMinutes { get; init; }

    /// <summary>
    /// The time that the virtual interface moves to the DOWN state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public DateTimeOffset? StartTime { get; init; }

    /// <summary>
    /// The time that the virtual interface moves out of the DOWN state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endTime")]
    public DateTimeOffset? EndTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
