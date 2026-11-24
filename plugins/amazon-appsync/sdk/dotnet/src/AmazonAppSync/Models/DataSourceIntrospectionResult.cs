using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record DataSourceIntrospectionResult
{
    /// <summary>
    /// The array of DataSourceIntrospectionModel objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("models")]
    public IReadOnlyList<DataSourceIntrospectionModel>? Models { get; init; }

    /// <summary>
    /// Determines the number of types to be returned in a single response before paginating. This value is typically taken from nextToken value from the previous response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextToken")]
    public string? NextToken { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
