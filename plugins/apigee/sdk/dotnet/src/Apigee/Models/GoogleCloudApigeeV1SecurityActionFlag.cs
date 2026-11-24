using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// The message that should be set in the case of a Flag action.
/// </summary>
public record GoogleCloudApigeeV1SecurityActionFlag
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
