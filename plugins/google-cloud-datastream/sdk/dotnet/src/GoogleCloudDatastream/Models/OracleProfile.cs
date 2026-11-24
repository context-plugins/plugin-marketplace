using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to an Oracle source.
/// </summary>
public record OracleProfile
{
    /// <summary>
    /// Required. Hostname for the Oracle connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the Oracle connection password. Mutually exclusive with the <c>password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredPassword")]
    public string? SecretManagerStoredPassword { get; init; }

    /// <summary>
    /// Port for the Oracle connection, default value is 1521.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    /// <summary>
    /// Required. Database for the Oracle connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("databaseService")]
    public string? DatabaseService { get; init; }

    /// <summary>
    /// Optional. Configuration for Oracle ASM connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleAsmConfig")]
    public OracleAsmConfig2? OracleAsmConfig { get; init; }

    /// <summary>
    /// Connection string attributes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionAttributes")]
    public IReadOnlyDictionary<string, string>? ConnectionAttributes { get; init; }

    /// <summary>
    /// Required. Username for the Oracle connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// Optional. Password for the Oracle connection. Mutually exclusive with the <c>secret_manager_stored_password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Optional. SSL configuration for the Oracle connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleSslConfig")]
    public OracleSslConfig1? OracleSslConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
