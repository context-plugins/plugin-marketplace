using System.Text.Json.Serialization;
using Contentstack.Core.Models;

namespace Contentstack.Models;

/// <summary>
/// Parameters for merging two user identity records.
/// </summary>
public record MergeUserAttributesRequest
{
    /// <summary>
    /// The UID of the source user whose attributes will be merged into the target. Typically the anonymous user UID.
    /// </summary>
    [JsonPropertyName("sourceUserUid")]
    public required string SourceUserUid { get; init; }

    /// <summary>
    /// The UID of the target user who will receive the merged attributes. Typically the authenticated user UID.
    /// </summary>
    [JsonPropertyName("targetUserUid")]
    public required string TargetUserUid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
