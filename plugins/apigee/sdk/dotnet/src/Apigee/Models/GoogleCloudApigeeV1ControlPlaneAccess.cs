using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// ControlPlaneAccess is the request body and response body of UpdateControlPlaneAccess. and the response body of GetControlPlaneAccess. The input identities contains an array of service accounts to grant access to the respective control plane resource, with each service account specified using the following format: <c>serviceAccount:</c><b>*service-account-name</b>*. The <b>*service-account-name</b>* is formatted like an email address. For example: <c>my-control-plane-service_account@my_project_id.iam.gserviceaccount.com</c> You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.
/// </summary>
public record GoogleCloudApigeeV1ControlPlaneAccess
{
    /// <summary>
    /// Identifier. The resource name of the ControlPlaneAccess. Format: "organizations/{org}/controlPlaneAccess"
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Service accounts granted access to control plane resources for the apigee-watcher component.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("watcherIdentities")]
    public IReadOnlyList<string>? WatcherIdentities { get; init; }

    /// <summary>
    /// Optional. Array of service accounts to grant access to control plane resources (for the Synchronizer component). The service accounts must have <b>Apigee Synchronizer Manager</b> role. See also <see href="https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts">Create service accounts</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("synchronizerIdentities")]
    public IReadOnlyList<string>? SynchronizerIdentities { get; init; }

    /// <summary>
    /// Optional. Array of service accounts authorized to publish analytics data to the control plane (for the Message Processor component).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("analyticsPublisherIdentities")]
    public IReadOnlyList<string>? AnalyticsPublisherIdentities { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
