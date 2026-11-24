using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Optional. An HTTP Operation.
/// </summary>
public record GoogleCloudApihubV1HttpOperationDetails2
{
    /// <summary>
    /// Optional. Query params of HttpOperation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("queryParams")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1QueryParam>? QueryParams { get; init; }

    /// <summary>
    /// Optional. Path params of HttpOperation
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pathParams")]
    public IReadOnlyList<GoogleCloudApihubV1PathParam>? PathParams { get; init; }

    /// <summary>
    /// Optional. Response metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public GoogleCloudApihubV1HttpResponse2? Response { get; init; }

    /// <summary>
    /// Optional. Request metadata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request")]
    public GoogleCloudApihubV1HttpRequest2? Request { get; init; }

    /// <summary>
    /// Required. An HTTP Operation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("httpOperation")]
    public GoogleCloudApihubV1HttpOperation1? HttpOperation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
