using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Flag a request through if it matches this SecurityAction.
/// </summary>
public record GoogleCloudApigeeV1SecurityActionFlag2
{
    /// <summary>
    /// Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction. Limit 5 headers per SecurityAction. At least one is mandatory.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("headers")]
    public IReadOnlyList<GoogleCloudApigeeV1SecurityActionHttpHeader>? Headers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
