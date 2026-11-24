using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. SSL configuration for the SQLServer connection.
/// </summary>
public record SqlServerSslConfig2
{
    /// <summary>
    /// If set, Datastream will enforce encryption and authenticate server identity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionAndServerValidation")]
    public EncryptionAndServerValidation2? EncryptionAndServerValidation { get; init; }

    /// <summary>
    /// If set, Datastream will not enforce encryption. If the DB server mandates encryption, then connection will be encrypted but server identity will not be authenticated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionNotEnforced")]
    public object? EncryptionNotEnforced { get; init; }

    /// <summary>
    /// If set, Datastream will enforce encryption without authenticating server identity. Server certificates will be trusted by default.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basicEncryption")]
    public object? BasicEncryption { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
