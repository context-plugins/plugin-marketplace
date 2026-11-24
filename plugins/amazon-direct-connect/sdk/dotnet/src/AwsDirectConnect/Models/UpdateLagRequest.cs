using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateLagRequest
{
    /// <summary>
    /// The ID of the LAG.
    /// </summary>
    [JsonPropertyName("lagId")]
    public required string LagId { get; init; }

    /// <summary>
    /// The name of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lagName")]
    public string? LagName { get; init; }

    /// <summary>
    /// The minimum number of physical connections that must be operational for the LAG itself to be operational.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("minimumLinks")]
    public int? MinimumLinks { get; init; }

    /// <summary>
    /// The LAG MAC Security (MACsec) encryption mode. Amazon Web Services applies the value to all connections which are part of the LAG.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionMode")]
    public string? EncryptionMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
