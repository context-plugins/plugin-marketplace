using System.Text.Json.Serialization;
using BundleSocial.Core.Models;
using BundleSocial.Models.Enums;

namespace BundleSocial.Models;

/// <summary>
/// For Reels only. Trial reels are only shared to non-followers.
/// </summary>
public record TrialParams
{
    [JsonPropertyName("graduationStrategy")]
    public required GraduationStrategy GraduationStrategy { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
