using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a MySQL source.
/// </summary>
public record MysqlProfile
{
    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the MySQL connection password. Mutually exclusive with the <c>password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredPassword")]
    public string? SecretManagerStoredPassword { get; init; }

    /// <summary>
    /// Required. Hostname for the MySQL connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostname")]
    public string? Hostname { get; init; }

    /// <summary>
    /// SSL configuration for the MySQL connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sslConfig")]
    public MysqlSslConfig1? SslConfig { get; init; }

    /// <summary>
    /// Required. Username for the MySQL connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// Optional. Input only. Password for the MySQL connection. Mutually exclusive with the <c>secret_manager_stored_password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Port for the MySQL connection, default value is 3306.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public int? Port { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
