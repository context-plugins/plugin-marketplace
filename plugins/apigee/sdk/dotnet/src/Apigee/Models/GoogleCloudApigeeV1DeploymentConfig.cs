using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// NEXT ID: 11
/// </summary>
public record GoogleCloudApigeeV1DeploymentConfig
{
    /// <summary>
    /// The list of deployment groups in which this proxy should be deployed. Not currently populated for shared flows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deploymentGroups")]
    public IReadOnlyList<string>? DeploymentGroups { get; init; }

    /// <summary>
    /// Additional key-value metadata for the deployment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyDictionary<string, string>? Attributes { get; init; }

    /// <summary>
    /// The service account identity associated with this deployment. If non-empty, will be in the following format: <c>projects/-/serviceAccounts/{account_email}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAccount")]
    public string? ServiceAccount { get; init; }

    /// <summary>
    /// A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoints")]
    public IReadOnlyDictionary<string, string>? Endpoints { get; init; }

    /// <summary>
    /// Location of the API proxy bundle as a URI.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// Unique ID. The ID will only change if the deployment is deleted and recreated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Name of the API or shared flow revision to be deployed in the following format: <c>organizations/{org}/apis/{api}/revisions/{rev}</c> or <c>organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Unique ID of the API proxy revision.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("proxyUid")]
    public string? ProxyUid { get; init; }

    /// <summary>
    /// Base path where the application will be hosted. Defaults to "/".
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basePath")]
    public string? BasePath { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
