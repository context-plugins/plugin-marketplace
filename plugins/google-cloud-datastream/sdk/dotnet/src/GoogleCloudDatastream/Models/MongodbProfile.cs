using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Profile for connecting to a MongoDB source.
/// </summary>
public record MongodbProfile
{
    /// <summary>
    /// Optional. A reference to a Secret Manager resource name storing the SQLServer connection password. Mutually exclusive with the <c>password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("secretManagerStoredPassword")]
    public string? SecretManagerStoredPassword { get; init; }

    /// <summary>
    /// Optional. Specifies additional options for the MongoDB connection. The options should be sent as key-value pairs, for example: <c>additional_options = {"serverSelectionTimeoutMS": "10000", "directConnection": "true"}</c>. Keys are case-sensitive and should match the official MongoDB connection string options: https://www.mongodb.com/docs/manual/reference/connection-string-options/ The server will not modify the values provided by the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("additionalOptions")]
    public IReadOnlyDictionary<string, string>? AdditionalOptions { get; init; }

    /// <summary>
    /// Srv connection format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("srvConnectionFormat")]
    public object? SrvConnectionFormat { get; init; }

    /// <summary>
    /// Required. List of host addresses for a MongoDB cluster. For SRV connection format, this list must contain exactly one DNS host without a port. For Standard connection format, this list must contain all the required hosts in the cluster with their respective ports.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hostAddresses")]
    public IReadOnlyList<HostAddress>? HostAddresses { get; init; }

    /// <summary>
    /// Required. Username for the MongoDB connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("username")]
    public string? Username { get; init; }

    /// <summary>
    /// Optional. Password for the MongoDB connection. Mutually exclusive with the <c>secret_manager_stored_password</c> field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("password")]
    public string? Password { get; init; }

    /// <summary>
    /// Optional. Name of the replica set. Only needed for self hosted replica set type MongoDB cluster. For SRV connection format, this field must be empty. For Standard connection format, this field must be specified.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("replicaSet")]
    public string? ReplicaSet { get; init; }

    /// <summary>
    /// Standard connection format.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("standardConnectionFormat")]
    public StandardConnectionFormat? StandardConnectionFormat { get; init; }

    /// <summary>
    /// Optional. SSL configuration for the MongoDB connection.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sslConfig")]
    public MongodbSslConfig2? SslConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
