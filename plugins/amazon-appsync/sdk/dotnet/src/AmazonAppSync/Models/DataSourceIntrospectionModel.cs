using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record DataSourceIntrospectionModel
{
    /// <summary>
    /// The name of the model. For example, this could be the name of a single table in a database.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// The DataSourceIntrospectionModelField object data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fields")]
    public IReadOnlyList<DataSourceIntrospectionModelField>? Fields { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("primaryKey")]
    public DataSourceIntrospectionModelIndex? PrimaryKey { get; init; }

    /// <summary>
    /// The array of DataSourceIntrospectionModelIndex objects.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("indexes")]
    public IReadOnlyList<DataSourceIntrospectionModelIndex>? Indexes { get; init; }

    /// <summary>
    /// Contains the output of the SDL that was generated from the introspected types. This is controlled by the includeModelsSDL parameter of the GetDataSourceIntrospection operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sdl")]
    public string? Sdl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
