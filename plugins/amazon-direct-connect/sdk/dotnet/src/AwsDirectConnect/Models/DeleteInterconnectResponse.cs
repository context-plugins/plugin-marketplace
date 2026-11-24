using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record DeleteInterconnectResponse
{
    /// <summary>
    /// The state of the interconnect. The following are the possible values: requested: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer. pending: The interconnect is approved, and is being initialized. available: The network link is up, and the interconnect is ready for use. down: The network link is down. deleting: The interconnect is being deleted. deleted: The interconnect is deleted. unknown: The state of the interconnect is not available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("interconnectState")]
    public InterconnectState? InterconnectState { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
