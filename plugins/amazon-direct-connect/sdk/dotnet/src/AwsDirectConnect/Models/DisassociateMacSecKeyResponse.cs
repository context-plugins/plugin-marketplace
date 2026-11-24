using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record DisassociateMacSecKeyResponse
{
    /// <summary>
    /// The ID of the dedicated connection (dxcon-xxxx), interconnect (dxcon-xxxx), or LAG (dxlag-xxxx).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionId")]
    public string? ConnectionId { get; init; }

    /// <summary>
    /// The MAC Security (MACsec) security keys no longer associated with the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("macSecKeys")]
    public IReadOnlyList<MacSecKey>? MacSecKeys { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
