using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// An aggregation of HTTP responses.
/// </summary>
public record GoogleCloudApihubV1HttpResponse
{
    /// <summary>
    /// Optional. Map of status code to observed count
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseCodes")]
    public IReadOnlyDictionary<string, string>? ResponseCodes { get; init; }

    /// <summary>
    /// Optional. Unordered map from header name to header metadata
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyDictionary<string, GoogleCloudApihubV1Header>? Headers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
