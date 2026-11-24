using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a PostgreSQL source.
/// </summary>
public record PostgresqlProfile
{
    /// <summary>
    /// Optional. SSL configuration for the PostgreSQL connection. In case PostgresqlSslConfig is not set, the connection will use the default SSL mode, which is <c>prefer</c> (i.e. this mode will only use encryption if enabled from database side, otherwise will use unencrypted communication)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sslConfig")]
    public PostgresqlSslConfig2? SslConfig { get; init; }

    /// <summary>
    /// Required. Hostname for the PostgreSQL connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// Required. Database for the PostgreSQL connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("database")]
    public string? Database { get; init; }

    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the PostgreSQL connection password. Mutually exclusive with the <c>password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredPassword")]
    public string? SecretManagerStoredPassword { get; init; }

    /// <summary>
    /// Port for the PostgreSQL connection, default value is 5432.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    /// <summary>
    /// Required. Username for the PostgreSQL connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// Optional. Password for the PostgreSQL connection. Mutually exclusive with the <c>secret_manager_stored_password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
