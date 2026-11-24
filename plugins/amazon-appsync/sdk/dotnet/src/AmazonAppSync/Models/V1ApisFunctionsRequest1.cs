using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record V1ApisFunctionsRequest1
{
    /// <summary>
    /// The Function name.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// The Function description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The Function DataSource name.
    /// </summary>
    [JsonPropertyName("dataSourceName")]
    public required string DataSourceName { get; init; }

    /// <summary>
    /// The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestMappingTemplate")]
    public string? RequestMappingTemplate { get; init; }

    /// <summary>
    /// The Function request mapping template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseMappingTemplate")]
    public string? ResponseMappingTemplate { get; init; }

    /// <summary>
    /// The version of the request mapping template. Currently, the supported value is 2018-05-29. Note that when using VTL and mapping templates, the functionVersion is required.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("functionVersion")]
    public string? FunctionVersion { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("syncConfig")]
    public SyncConfig? SyncConfig { get; init; }

    /// <summary>
    /// The maximum batching size for a resolver.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxBatchSize")]
    public int? MaxBatchSize { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtime")]
    public AppSyncRuntime? Runtime { get; init; }

    /// <summary>
    /// The function code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
