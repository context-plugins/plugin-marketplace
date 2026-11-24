using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// PostgreSQL SSL configuration information.
/// </summary>
public record PostgresqlSslConfig
{
    /// <summary>
    /// If this field is set, the communication will be encrypted with TLS encryption and both the server identity and the client identity will be authenticated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverAndClientVerification")]
    public ServerAndClientVerification2? ServerAndClientVerification { get; init; }

    /// <summary>
    /// If this field is set, the communication will be encrypted with TLS encryption and the server identity will be authenticated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serverVerification")]
    public ServerVerification2? ServerVerification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
