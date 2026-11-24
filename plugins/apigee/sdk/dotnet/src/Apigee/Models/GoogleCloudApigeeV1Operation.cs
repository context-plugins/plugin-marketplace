using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.
/// </summary>
public record GoogleCloudApigeeV1Operation
{
    /// <summary>
    /// Required. REST resource path associated with the API proxy or remote service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public string? Resource { get; init; }

    /// <summary>
    /// methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("methods")]
    public IReadOnlyList<string>? Methods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
