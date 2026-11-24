using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Debug mask that applies to all deployments in the environment.
/// </summary>
public record GoogleCloudApigeeV1DebugMask1
{
    /// <summary>
    /// List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseJSONPaths")]
    public IReadOnlyList<string>? ResponseJsonPaths { get; init; }

    /// <summary>
    /// Name of the debug mask.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestJSONPaths")]
    public IReadOnlyList<string>? RequestJsonPaths { get; init; }

    /// <summary>
    /// List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("faultJSONPaths")]
    public IReadOnlyList<string>? FaultJsonPaths { get; init; }

    /// <summary>
    /// List of variables that should be masked from the debug output.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public IReadOnlyList<string>? Variables { get; init; }

    /// <summary>
    /// List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("faultXPaths")]
    public IReadOnlyList<string>? FaultXPaths { get; init; }

    /// <summary>
    /// List of XPaths that specify the XML elements to be filtered from XML response message payloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("responseXPaths")]
    public IReadOnlyList<string>? ResponseXPaths { get; init; }

    /// <summary>
    /// List of XPaths that specify the XML elements to be filtered from XML request message payloads.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("requestXPaths")]
    public IReadOnlyList<string>? RequestXPaths { get; init; }

    /// <summary>
    /// Map of namespaces to URIs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("namespaces")]
    public IReadOnlyDictionary<string, string>? Namespaces { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
