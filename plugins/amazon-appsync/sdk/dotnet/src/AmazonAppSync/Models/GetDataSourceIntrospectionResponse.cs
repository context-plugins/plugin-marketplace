using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;
using AmazonAppSync.Models.Enums;

namespace AmazonAppSync.Models;

public record GetDataSourceIntrospectionResponse
{
    /// <summary>
    /// The introspection ID. Each introspection contains a unique ID that can be used to reference the instrospection record.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("introspectionId")]
    public string? IntrospectionId { get; init; }

    /// <summary>
    /// The status of the introspection during retrieval. By default, when a new instrospection is being retrieved, the status will be set to PROCESSING. Once the operation has been completed, the status will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED operation will return an error and its details as an introspectionStatusDetail.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("introspectionStatus")]
    public IntrospectionStatus? IntrospectionStatus { get; init; }

    /// <summary>
    /// The error detail field. When a FAILED introspectionStatus is returned, the introspectionStatusDetail will also return the exact error that was generated during the operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("introspectionStatusDetail")]
    public string? IntrospectionStatusDetail { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("introspectionResult")]
    public DataSourceIntrospectionResult? IntrospectionResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
