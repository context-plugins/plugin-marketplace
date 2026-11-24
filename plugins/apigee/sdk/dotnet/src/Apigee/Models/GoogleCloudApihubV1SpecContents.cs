using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The spec contents.
/// </summary>
public record GoogleCloudApihubV1SpecContents
{
    /// <summary>
    /// Required. The mime type of the content for example application/json, application/yaml, application/wsdl etc.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mimeType")]
    public string? MimeType { get; init; }

    /// <summary>
    /// Required. The contents of the spec. The contents should be base64 encoded while calling the OnePlatform APIs like CreateSpec, UpdateSpec and CollectApiData.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("contents")]
    public string? Contents { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
