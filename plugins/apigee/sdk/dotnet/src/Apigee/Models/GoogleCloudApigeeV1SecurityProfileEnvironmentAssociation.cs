using System.Text.Json.Serialization;
using Apigee.Core.Models;

namespace Apigee.Models;

/// <summary>
/// Represents a SecurityProfileEnvironmentAssociation resource.
/// </summary>
public record GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation
{
    /// <summary>
    /// Immutable. The environment ID that the profile is attached to, e.g. <c>prod</c>. This is the bare environment ID, not a full resource name; see b/288477507.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Output only. The time when environment was attached to the security profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("attachTime")]
    public string? AttachTime { get; init; }

    /// <summary>
    /// DEPRECATED: DO NOT USE Revision ID of the security profile.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("securityProfileRevisionId")]
    public string? SecurityProfileRevisionId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
