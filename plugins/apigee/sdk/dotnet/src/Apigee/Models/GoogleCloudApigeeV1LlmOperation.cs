using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents the pairing of REST resource path, model and the actions (verbs) allowed on the resource path.
/// </summary>
public record GoogleCloudApigeeV1LlmOperation
{
    /// <summary>
    /// Required. LLM model name associated with the API proxy
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("model")]
    public string? Model { get; init; }

    /// <summary>
    /// Required. REST resource path associated with the API proxy or remote service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("resource")]
    public string? Resource { get; init; }

    /// <summary>
    /// Optional. methods refers to the REST verbs as in https://httpwg.org/specs/rfc9110.html For example: GET, POST, PUT, DELETE, etc. They need to be in uppercase. When none specified, all verb types are allowed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("methods")]
    public IReadOnlyList<string>? Methods { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
