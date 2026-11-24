using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
/// </summary>
public record BackfillAllStrategy
{
    /// <summary>
    /// Source catalog data source objects to avoid backfilling. This is mainly used to represent SaaS applications objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("saasExcludedObjects")]
    public SourceCatalog2? SaasExcludedObjects { get; init; }

    /// <summary>
    /// PostgreSQL data source objects to avoid backfilling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlExcludedObjects")]
    public PostgresqlRdbms6? PostgresqlExcludedObjects { get; init; }

    /// <summary>
    /// Spanner data source objects to avoid backfilling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerExcludedObjects")]
    public SpannerDatabase6? SpannerExcludedObjects { get; init; }

    /// <summary>
    /// MySQL data source objects to avoid backfilling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlExcludedObjects")]
    public MysqlRdbms6? MysqlExcludedObjects { get; init; }

    /// <summary>
    /// SQLServer data source objects to avoid backfilling
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerExcludedObjects")]
    public SqlServerRdbms6? SqlServerExcludedObjects { get; init; }

    /// <summary>
    /// MongoDB data source objects to avoid backfilling
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbExcludedObjects")]
    public MongodbCluster6? MongodbExcludedObjects { get; init; }

    /// <summary>
    /// Oracle data source objects to avoid backfilling.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleExcludedObjects")]
    public OracleRdbms6? OracleExcludedObjects { get; init; }

    /// <summary>
    /// Salesforce data source objects to avoid backfilling
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceExcludedObjects")]
    public SalesforceOrg1? SalesforceExcludedObjects { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
