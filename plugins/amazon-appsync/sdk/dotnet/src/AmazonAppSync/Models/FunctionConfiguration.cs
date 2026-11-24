using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record FunctionConfiguration
{
    /// <summary>
    /// A unique ID representing the Function object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("functionId")]
    public string? FunctionId { get; init; }

    /// <summary>
    /// The Amazon Resource Name (ARN) of the Function object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("functionArn")]
    public string? FunctionArn { get; init; }

    /// <summary>
    /// The name of the Function object.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The Function description.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The name of the DataSource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataSourceName")]
    public string? DataSourceName { get; init; }

    /// <summary>
    /// The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestMappingTemplate")]
    public string? RequestMappingTemplate { get; init; }

    /// <summary>
    /// The Function response mapping template.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseMappingTemplate")]
    public string? ResponseMappingTemplate { get; init; }

    /// <summary>
    /// The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.
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
