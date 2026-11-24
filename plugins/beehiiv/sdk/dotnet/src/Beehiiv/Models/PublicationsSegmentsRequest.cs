using System.Text.Json.Serialization;
using Beehiiv.Core.Models;
using Beehiiv.Models.OneOf;

namespace Beehiiv.Models;

public record PublicationsSegmentsRequest
{
    /// <summary>
    /// A unique name for the segment that does not already exist in the publication.
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    /// <summary>
    /// Input for segment creation. Use <c>subscriptions</c> or <c>emails</c> to create a manual segment from explicit lists, or <c>custom_fields</c> to create a dynamic segment filtered by custom field values.
    /// </summary>
    [JsonPropertyName("input")]
    public required SegmentSubscriptionInput3 Input { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
