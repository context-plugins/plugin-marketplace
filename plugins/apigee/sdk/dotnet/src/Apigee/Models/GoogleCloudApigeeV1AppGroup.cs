using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// AppGroup contains the request/response fields representing the logical grouping of apps. Note that appgroup_id, create_time and update_time cannot be changed by the user, and gets updated by the system. The name and the organization once provided cannot be edited subsequently.
/// </summary>
public record GoogleCloudApigeeV1AppGroup
{
    /// <summary>
    /// Valid values are <c>active</c> or <c>inactive</c>. Note that the status of the AppGroup should be updated via UpdateAppGroupRequest by setting the action as <c>active</c> or <c>inactive</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public string? Status { get; init; }

    /// <summary>
    /// Output only. Created time as milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("createdAt")]
    public string? CreatedAt { get; init; }

    /// <summary>
    /// A list of attributes
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributes")]
    public IReadOnlyList<GoogleCloudApigeeV1Attribute>? Attributes { get; init; }

    /// <summary>
    /// channel identifier identifies the owner maintaing this grouping.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channelId")]
    public string? ChannelId { get; init; }

    /// <summary>
    /// app group name displayed in the UI
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("displayName")]
    public string? DisplayName { get; init; }

    /// <summary>
    /// Optional. Email of the AppGroup.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("email")]
    public string? Email { get; init; }

    /// <summary>
    /// Immutable. the org the app group is created
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("organization")]
    public string? Organization { get; init; }

    /// <summary>
    /// Output only. Internal identifier that cannot be edited
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("appGroupId")]
    public string? AppGroupId { get; init; }

    /// <summary>
    /// Immutable. Name of the AppGroup. Characters you can use in the name are restricted to: A-Z0-9._\-$ %.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// A reference to the associated storefront/marketplace.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("channelUri")]
    public string? ChannelUri { get; init; }

    /// <summary>
    /// Output only. Modified time as milliseconds since epoch.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lastModifiedAt")]
    public string? LastModifiedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
