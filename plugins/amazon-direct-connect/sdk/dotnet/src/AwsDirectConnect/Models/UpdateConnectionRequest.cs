using System.Text.Json.Serialization;
using AwsDirectConnect.Core.Models;

namespace AwsDirectConnect.Models;

public record UpdateConnectionRequest
{
    /// <summary>
    /// The ID of the connection. You can use DescribeConnections to retrieve the connection ID.
    /// </summary>
    [JsonPropertyName("connectionId")]
    public required string ConnectionId { get; init; }

    /// <summary>
    /// The name of the connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionName")]
    public string? ConnectionName { get; init; }

    /// <summary>
    /// The connection MAC Security (MACsec) encryption mode. The valid values are no_encrypt, should_encrypt, and must_encrypt.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionMode")]
    public string? EncryptionMode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
