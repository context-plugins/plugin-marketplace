using System.Collections.Generic;
using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Models;

public record CreateLagRequest
{
    /// <summary>
    /// The number of physical dedicated connections initially provisioned and bundled by the LAG. You can have a maximum of four connections when the port speed is 1Gbps or 10Gbps, or two when the port speed is 100Gbps or 400Gbps.
    /// </summary>
    [JsonPropertyName("numberOfConnections")]
    public required int NumberOfConnections { get; init; }

    /// <summary>
    /// The location for the LAG.
    /// </summary>
    [JsonPropertyName("location")]
    public required string Location { get; init; }

    /// <summary>
    /// The bandwidth of the individual physical dedicated connections bundled by the LAG. The possible values are 1Gbps,10Gbps, 100Gbps, and 400Gbps.
    /// </summary>
    [JsonPropertyName("connectionsBandwidth")]
    public required string ConnectionsBandwidth { get; init; }

    /// <summary>
    /// The name of the LAG.
    /// </summary>
    [JsonPropertyName("lagName")]
    public required string LagName { get; init; }

    /// <summary>
    /// The ID of an existing dedicated connection to migrate to the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionId")]
    public string? ConnectionId { get; init; }

    /// <summary>
    /// The tags to associate with the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public IReadOnlyList<Tag>? Tags { get; init; }

    /// <summary>
    /// The tags to associate with the automtically created LAGs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("childConnectionTags")]
    public IReadOnlyList<Tag>? ChildConnectionTags { get; init; }

    /// <summary>
    /// The name of the service provider associated with the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("providerName")]
    public string? ProviderName { get; init; }

    /// <summary>
    /// Indicates whether the connection will support MAC Security (MACsec). All connections in the LAG must be capable of supporting MAC Security (MACsec). For information about MAC Security (MACsec) prerequisties, see MACsec prerequisties in the Direct Connect User Guide.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestMACSec")]
    public bool? RequestMacSec { get; init; }

    /// <summary>
    /// The billing mode for the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("billingMode")]
    public BillingMode3? BillingMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
