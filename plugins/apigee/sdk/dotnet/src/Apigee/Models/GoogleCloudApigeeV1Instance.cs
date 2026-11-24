using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Apigee runtime instance.
/// </summary>
public record GoogleCloudApigeeV1Instance
{
    /// <summary>
    /// Output only. State of the instance. Values other than <c>ACTIVE</c> means the resource is not ready to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State4? State { get; init; }

    /// <summary>
    /// Required. Compute Engine location where the instance resides.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("location")]
    public string? Location { get; init; }

    /// <summary>
    /// Output only. Port number of the exposed Apigee endpoint.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("port")]
    public string? Port { get; init; }

    /// <summary>
    /// Optional. Description of the instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: <c>a.b.c.d/22</c> or <c>e.f.g.h/28</c> or <c>a.b.c.d/22,e.f.g.h/28</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ipRange")]
    public string? IpRange { get; init; }

    /// <summary>
    /// Output only. Time the instance was last modified in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    /// <summary>
    /// Output only. Indicates whether the instance is version locked. If true, the instance will not be updated by automated runtime rollouts. This is only supported for Apigee X instances.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("isVersionLocked")]
    public bool? IsVersionLocked { get; init; }

    /// <summary>
    /// Output only. Resource name of the service attachment created for the instance in the format: <c>projects/*/regions/*/serviceAttachments/*</c> Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceAttachment")]
    public string? ServiceAttachment { get; init; }

    /// <summary>
    /// Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("consumerAcceptList")]
    public IReadOnlyList<string>? ConsumerAcceptList { get; init; }

    /// <summary>
    /// Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("host")]
    public string? Host { get; init; }

    /// <summary>
    /// Optional. Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used. Use the following format: <c>projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("diskEncryptionKeyName")]
    public string? DiskEncryptionKeyName { get; init; }

    /// <summary>
    /// Required. Resource ID of the instance. Values must match the regular expression <c>^a-z{0,30}[a-z\d]$</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("accessLoggingConfig")]
    public GoogleCloudApigeeV1AccessLoggingConfig2? AccessLoggingConfig { get; init; }

    /// <summary>
    /// Output only. Time and date of the scheduled maintenance for this instance. This field is only populated for instances that have opted into Maintenance Window and if there is an upcoming maintenance. Cleared once the maintenance is complete.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scheduledMaintenance")]
    public GoogleCloudApigeeV1ScheduledMaintenance2? ScheduledMaintenance { get; init; }

    /// <summary>
    /// Optional. Display name for the instance.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Output only. Time the instance was created in milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support <c>SLASH_16</c> to <c>SLASH_20</c> and defaults to <c>SLASH_16</c>. Evaluation organizations support only <c>SLASH_23</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("peeringCidrRange")]
    public PeeringCidrRange? PeeringCidrRange { get; init; }

    /// <summary>
    /// Optional. Apigee customers can set the preferred window to perform maintenance on the instance (day of the week and time of day).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maintenanceUpdatePolicy")]
    public GoogleCloudApigeeV1MaintenanceUpdatePolicy2? MaintenanceUpdatePolicy { get; init; }

    /// <summary>
    /// Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("runtimeVersion")]
    public string? RuntimeVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
