using System.ComponentModel.DataAnnotations;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscInstagramBusinessDiscovery operation.
/// </summary>
public sealed record MiscInstagramBusinessDiscoveryRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// Instagram username to search for
    /// </summary>
    [MinLength(1)]
    public required string Username { get; init; }
}
