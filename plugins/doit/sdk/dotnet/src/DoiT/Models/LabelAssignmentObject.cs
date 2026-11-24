using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

/// <summary>
/// Object identifier and type used for label assignments.
/// </summary>
public record LabelAssignmentObject
{
    /// <summary>
    /// The ID of the object to assign/unassign.
    /// </summary>
    [JsonPropertyName("objectId")]
    public required string ObjectId { get; init; }

    /// <summary>
    /// The type of the object.
    /// </summary>
    [JsonPropertyName("objectType")]
    public required ObjectType ObjectType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
