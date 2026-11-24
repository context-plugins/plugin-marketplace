using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Specific source object identifier.
/// </summary>
public record SourceObjectIdentifier1
{
    /// <summary>
    /// MongoDB data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbIdentifier")]
    public MongodbObjectIdentifier? MongodbIdentifier { get; init; }

    /// <summary>
    /// Oracle data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleIdentifier")]
    public OracleObjectIdentifier? OracleIdentifier { get; init; }

    /// <summary>
    /// Spanner data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerIdentifier")]
    public SpannerObjectIdentifier? SpannerIdentifier { get; init; }

    /// <summary>
    /// Salesforce data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceIdentifier")]
    public SalesforceObjectIdentifier? SalesforceIdentifier { get; init; }

    /// <summary>
    /// PostgreSQL data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlIdentifier")]
    public PostgresqlObjectIdentifier? PostgresqlIdentifier { get; init; }

    /// <summary>
    /// SQLServer data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerIdentifier")]
    public SqlServerObjectIdentifier? SqlServerIdentifier { get; init; }

    /// <summary>
    /// Mysql data source object identifier.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlIdentifier")]
    public MysqlObjectIdentifier? MysqlIdentifier { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
