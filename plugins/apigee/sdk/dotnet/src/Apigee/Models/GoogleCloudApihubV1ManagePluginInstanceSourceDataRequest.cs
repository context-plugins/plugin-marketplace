using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// The ManagePluginInstanceSourceData method's request.
/// </summary>
public record GoogleCloudApihubV1ManagePluginInstanceSourceDataRequest
{
    /// <summary>
    /// Required. Relative path of data being managed for a given plugin instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("relativePath")]
    public string? RelativePath { get; init; }

    /// <summary>
    /// Required. Type of data to be managed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("dataType")]
    public DataType4? DataType { get; init; }

    /// <summary>
    /// Required. Data to be managed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public string? Data { get; init; }

    /// <summary>
    /// Required. Action to be performed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("action")]
    public ActionEnum? Action { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
