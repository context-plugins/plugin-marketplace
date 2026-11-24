using System.Collections.Generic;
using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. An ad-hoc connection profile configuration.
/// </summary>
public record ConnectionProfile2
{
    /// <summary>
    /// Profile for connecting to a BigQuery destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bigqueryProfile")]
    public object? BigqueryProfile { get; init; }

    /// <summary>
    /// Required. Display name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Profile for connecting to a MySQL source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlProfile")]
    public MysqlProfile? MysqlProfile { get; init; }

    /// <summary>
    /// Optional. Profile for connecting to a Workday source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workdayProfile")]
    public WorkdayProfile1? WorkdayProfile { get; init; }

    /// <summary>
    /// Profile for connecting to a Cloud Storage destination.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("gcsProfile")]
    public GcsProfile? GcsProfile { get; init; }

    /// <summary>
    /// Profile for connecting to a Spanner source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerProfile")]
    public SpannerProfile? SpannerProfile { get; init; }

    /// <summary>
    /// Output only. The create time of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createTime")]
    public string? CreateTime { get; init; }

    /// <summary>
    /// Profile for connecting to a SQLServer source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerProfile")]
    public SqlServerProfile? SqlServerProfile { get; init; }

    /// <summary>
    /// Labels.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("labels")]
    public IReadOnlyDictionary<string, string>? Labels { get; init; }

    /// <summary>
    /// Profile for connecting to a Salesforce Marketing Cloud source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceMarketingCloudProfile")]
    public SalesforceMarketingCloudProfile? SalesforceMarketingCloudProfile { get; init; }

    /// <summary>
    /// Profile for connecting to a Dataverse source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataverseProfile")]
    public DataverseProfile? DataverseProfile { get; init; }

    /// <summary>
    /// Profile for connecting to a Salesforce source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceProfile")]
    public SalesforceProfile? SalesforceProfile { get; init; }

    /// <summary>
    /// Profile for connecting to a MongoDB source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbProfile")]
    public MongodbProfile? MongodbProfile { get; init; }

    /// <summary>
    /// Profile for connecting to a ServiceNow source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceNowProfile")]
    public ServiceNowProfile? ServiceNowProfile { get; init; }

    /// <summary>
    /// Private connectivity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("privateConnectivity")]
    public PrivateConnectivity2? PrivateConnectivity { get; init; }

    /// <summary>
    /// Output only. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzs")]
    public bool? SatisfiesPzs { get; init; }

    /// <summary>
    /// Output only. Reserved for future use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("satisfiesPzi")]
    public bool? SatisfiesPzi { get; init; }

    /// <summary>
    /// Output only. Identifier. The resource's name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Forward SSH tunnel connectivity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("forwardSshConnectivity")]
    public ForwardSshTunnelConnectivity1? ForwardSshConnectivity { get; init; }

    /// <summary>
    /// Profile for connecting to an Oracle source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleProfile")]
    public OracleProfile? OracleProfile { get; init; }

    /// <summary>
    /// Output only. The update time of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updateTime")]
    public string? UpdateTime { get; init; }

    /// <summary>
    /// Static Service IP connectivity.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("staticServiceIpConnectivity")]
    public object? StaticServiceIpConnectivity { get; init; }

    /// <summary>
    /// Profile for connecting to a PostgreSQL source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlProfile")]
    public PostgresqlProfile? PostgresqlProfile { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
