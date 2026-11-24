using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Request message for 'discover' ConnectionProfile request.
/// </summary>
public record DiscoverConnectionProfileRequest
{
    /// <summary>
    /// Optional. PostgreSQL RDBMS to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("postgresqlRdbms")]
    public PostgresqlRdbms2? PostgresqlRdbms { get; init; }

    /// <summary>
    /// Optional. The number of hierarchy levels below the current level to be retrieved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hierarchyDepth")]
    public int? HierarchyDepth { get; init; }

    /// <summary>
    /// Optional. Source catalog to enrich with child data objects and metadata. This is mainly used to represent SaaS sources databases.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sourceCatalog")]
    public SourceCatalog4? SourceCatalog { get; init; }

    /// <summary>
    /// Optional. SQLServer RDBMS to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sqlServerRdbms")]
    public SqlServerRdbms2? SqlServerRdbms { get; init; }

    /// <summary>
    /// Optional. MongoDB cluster to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mongodbCluster")]
    public MongodbCluster3? MongodbCluster { get; init; }

    /// <summary>
    /// Optional. Oracle RDBMS to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("oracleRdbms")]
    public OracleRdbms4? OracleRdbms { get; init; }

    /// <summary>
    /// Optional. MySQL RDBMS to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mysqlRdbms")]
    public MysqlRdbms4? MysqlRdbms { get; init; }

    /// <summary>
    /// Optional. Salesforce organization to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("salesforceOrg")]
    public SalesforceOrg5? SalesforceOrg { get; init; }

    /// <summary>
    /// Optional. An ad-hoc connection profile configuration.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionProfile")]
    public ConnectionProfile2? ConnectionProfile { get; init; }

    /// <summary>
    /// Optional. A reference to an existing connection profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("connectionProfileName")]
    public string? ConnectionProfileName { get; init; }

    /// <summary>
    /// Optional. Whether to retrieve the full hierarchy of data objects (TRUE) or only the current level (FALSE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fullHierarchy")]
    public bool? FullHierarchy { get; init; }

    /// <summary>
    /// Optional. Spanner database to enrich with child data objects and metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spannerDatabase")]
    public SpannerDatabase2? SpannerDatabase { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
