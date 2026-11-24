using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// HTTP Path parameter.
/// </summary>
public record GoogleCloudApihubV1PathParam
{
    /// <summary>
    /// Optional. Data type of path param
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataType")]
    public DataTypeEnum? DataType { get; init; }

    /// <summary>
    /// Optional. Segment location in the path, 1-indexed
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("position")]
    public int? Position { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
