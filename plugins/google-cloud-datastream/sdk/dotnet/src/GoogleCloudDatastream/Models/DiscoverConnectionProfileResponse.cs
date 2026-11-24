using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Response from a discover request.
/// </summary>
public record DiscoverConnectionProfileResponse
{
    /// <summary>
    /// Enriched Spanner database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerDatabase")]
    public SpannerDatabase1? SpannerDatabase { get; init; }

    /// <summary>
    /// Enriched Salesforce organization.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceOrg")]
    public SalesforceOrg2? SalesforceOrg { get; init; }

    /// <summary>
    /// Enriched Oracle RDBMS object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleRdbms")]
    public OracleRdbms1? OracleRdbms { get; init; }

    /// <summary>
    /// Enriched source catalog. This is mainly used to represent SaaS sources databases.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCatalog")]
    public SourceCatalog3? SourceCatalog { get; init; }

    /// <summary>
    /// Enriched SQLServer RDBMS object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerRdbms")]
    public SqlServerRdbms1? SqlServerRdbms { get; init; }

    /// <summary>
    /// Enriched MongoDB cluster.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbCluster")]
    public MongodbCluster1? MongodbCluster { get; init; }

    /// <summary>
    /// Enriched MySQL RDBMS object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlRdbms")]
    public MysqlRdbms1? MysqlRdbms { get; init; }

    /// <summary>
    /// Enriched PostgreSQL RDBMS object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlRdbms")]
    public PostgresqlRdbms1? PostgresqlRdbms { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
