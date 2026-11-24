using System.ComponentModel.DataAnnotations;
using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscInstagramSearchAudio operation.
/// </summary>
public sealed record MiscInstagramSearchAudioRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// The type of Instagram audio to search for.
    /// </summary>
    public required AudioType AudioType { get; init; }

    /// <summary>
    /// Optional keyword search query.
    /// </summary>
    [StringLength(100, MinimumLength = 1)]
    public string? SearchQuery { get; init; }
}
