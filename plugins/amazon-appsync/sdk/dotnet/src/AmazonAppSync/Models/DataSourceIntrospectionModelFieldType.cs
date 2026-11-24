using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonAppSync.Core.Models;

namespace AmazonAppSync.Models;

public record DataSourceIntrospectionModelFieldType
{
    /// <summary>
    /// Specifies the classification of data. For example, this could be set to values like Scalar or NonNull to indicate a fundamental property of the field. Valid values include: Scalar: Indicates the value is a primitive type (scalar). NonNull: Indicates the field cannot be null. List: Indicates the field contains a list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("kind")]
    public string? Kind { get; init; }

    /// <summary>
    /// The name of the data type that represents the field. For example, String is a valid name value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public DataSourceIntrospectionModelFieldType? Type { get; init; }

    /// <summary>
    /// The values of the type field. This field represents the AppSync data type equivalent of the introspected field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    public IReadOnlyList<string>? Values { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
