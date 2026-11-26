using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Justtrack.Core.Models;

namespace Justtrack.Models;

public record User1
{
    /// <summary>
    /// id of the user, that was provided to the justtrack sdk through SetUserId. It is NOT the legacy justtrack user id.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// 36 character uuid of the installation. Does not change across reinstalls as part of retargeting. Can be retrieved from the justtrack sdk by calling getInstallInstanceId.
    /// </summary>
    [JsonPropertyName("installInstanceId")]
    public required Guid InstallInstanceId { get; init; }

    /// <summary>
    /// 36 character uuid of the attribution of the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attributionId")]
    public Guid? AttributionId { get; init; }

    /// <summary>
    /// GAID or IDFA, depending on platform
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deviceId")]
    public string? DeviceId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
