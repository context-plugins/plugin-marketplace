using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Required. Source connection profile configuration.
/// </summary>
public record SourceConfig2
{
    /// <summary>
    /// Required. Source connection profile resource. Format: <c>projects/{project}/locations/{location}/connectionProfiles/{name}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceConnectionProfile")]
    public string? SourceConnectionProfile { get; init; }

    /// <summary>
    /// PostgreSQL data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlSourceConfig")]
    public PostgresqlSourceConfig2? PostgresqlSourceConfig { get; init; }

    /// <summary>
    /// Oracle data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleSourceConfig")]
    public OracleSourceConfig1? OracleSourceConfig { get; init; }

    /// <summary>
    /// Spanner data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerSourceConfig")]
    public SpannerSourceConfig2? SpannerSourceConfig { get; init; }

    /// <summary>
    /// Optional. Workday data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("workdaySourceConfig")]
    public WorkdaySourceConfig2? WorkdaySourceConfig { get; init; }

    /// <summary>
    /// MySQL data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlSourceConfig")]
    public MysqlSourceConfig1? MysqlSourceConfig { get; init; }

    /// <summary>
    /// SQLServer data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerSourceConfig")]
    public SqlServerSourceConfig1? SqlServerSourceConfig { get; init; }

    /// <summary>
    /// Salesforce data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceSourceConfig")]
    public SalesforceSourceConfig1? SalesforceSourceConfig { get; init; }

    /// <summary>
    /// MongoDB data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbSourceConfig")]
    public MongodbSourceConfig2? MongodbSourceConfig { get; init; }

    /// <summary>
    /// Dataverse data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataverseSourceConfig")]
    public DataverseSourceConfig1? DataverseSourceConfig { get; init; }

    /// <summary>
    /// ServiceNow data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceNowSourceConfig")]
    public ServiceNowSourceConfig2? ServiceNowSourceConfig { get; init; }

    /// <summary>
    /// Salesforce Marketing Cloud data source configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceMarketingCloudSourceConfig")]
    public SalesforceMarketingCloudSourceConfig2? SalesforceMarketingCloudSourceConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
