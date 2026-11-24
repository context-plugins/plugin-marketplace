using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Base path/deployment that may stop receiving some traffic.
/// </summary>
public record GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3
{
    /// <summary>
    /// Name of the deployed API proxy revision containing the base path.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revision")]
    public string? Revision { get; init; }

    /// <summary>
    /// Name of the environment in which the proxy is deployed.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("environment")]
    public string? Environment { get; init; }

    /// <summary>
    /// Base path receiving traffic.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("basepath")]
    public string? Basepath { get; init; }

    /// <summary>
    /// Name of the deployed API proxy revision containing the base path.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProxy")]
    public string? ApiProxy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
