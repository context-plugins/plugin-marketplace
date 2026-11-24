using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Core.Validation.Attributes;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// One related resource returned by the traversal.
/// </summary>
public record DiagramRelationship
{
    /// <summary>
    /// Related resource ID.
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Component bucket the related resource lives in.
    /// </summary>
    [JsonPropertyName("type")]
    public required Type2 Type { get; init; }

    /// <summary>
    /// Human-readable name of the related resource.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Cloud service type when available.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("serviceType")]
    public string? ServiceType { get; init; }

    /// <summary>
    /// How the resource is related to the anchor. <c>downstream</c> / <c>upstream</c> are edge
    /// relations (anchor is the edge origin / destination respectively).
    /// <c>group_member</c> means the related resource is contained in the anchor (anchor is
    /// a group); <c>group_parent</c> means the related resource is a group that contains
    /// the anchor.
    /// </summary>
    [JsonPropertyName("relation")]
    public required Relation Relation { get; init; }

    /// <summary>
    /// Edge hop count from the anchor. Group-member / group-parent entries are reported as 1.
    /// </summary>
    [JsonPropertyName("hops")]
    [Minimum(1)]
    public required int Hops { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
