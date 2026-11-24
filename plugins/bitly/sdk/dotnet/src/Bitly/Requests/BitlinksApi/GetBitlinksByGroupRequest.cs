using System.Collections.Generic;
using Bitly.Models.Enums;

namespace Bitly.Requests.BitlinksApi;

/// <summary>
/// The inputs of the GetBitlinksByGroup operation.
/// </summary>
public sealed record GetBitlinksByGroupRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    /// <summary>
    /// The quantity of items to be be returned
    /// </summary>
    public int Size { get; init; } = 50;

    /// <summary>
    /// Token used to search next batch, only use response from API as input value.
    /// </summary>
    public string? SearchAfter { get; init; }

    /// <summary>
    /// The value that you would like to search
    /// </summary>
    public string? Query { get; init; }

    /// <summary>
    /// The hostname and/or path you would like to search (case-insensitive). Subdomains included; query params and fragment ignored.
    /// </summary>
    public string? HostnamePathQuery { get; init; }

    /// <summary>
    /// Timestamp as an integer unix epoch (seconds only)
    /// </summary>
    public int? CreatedBefore { get; init; }

    /// <summary>
    /// Timestamp as an integer unix epoch (seconds only)
    /// </summary>
    public int? CreatedAfter { get; init; }

    /// <summary>
    /// Whether or not to include archived resources
    /// </summary>
    public Archived Archived { get; init; } = Archived.Off;

    /// <summary>
    /// Filter to only Bitlinks that contain deeplinks
    /// </summary>
    public Deeplinks Deeplinks { get; init; } = Deeplinks.Both;

    /// <summary>
    /// Filter to only Bitlinks that contain deeplinks configured with a custom domain
    /// </summary>
    public DomainDeeplinks DomainDeeplinks { get; init; } = DomainDeeplinks.Both;

    /// <summary>
    /// Filter to return only links for the given campaign GUID, can be provided
    /// </summary>
    public string? CampaignGuid { get; init; }

    /// <summary>
    /// Filter to return only links for the given channel GUID, can be provided, overrides all other parameters
    /// </summary>
    public string? ChannelGuid { get; init; }

    public CustomBitlink CustomBitlink { get; init; } = CustomBitlink.Both;

    /// <summary>
    /// a filter value if the resource has any QR codes
    /// </summary>
    public HasQrCodes HasQrCodes { get; init; } = HasQrCodes.Both;

    /// <summary>
    /// filter bitlinks by expiration status
    /// </summary>
    public IsExpired IsExpired { get; init; } = IsExpired.Both;

    /// <summary>
    /// filter bitlinks by presence of expiration
    /// </summary>
    public HasExpiration HasExpiration { get; init; } = HasExpiration.Both;

    /// <summary>
    /// filter bitlinks by presence of dynamic routing rules
    /// </summary>
    public HasDynamicRouting HasDynamicRouting { get; init; } = HasDynamicRouting.Both;

    /// <summary>
    /// Filter by given tags
    /// </summary>
    public IReadOnlyList<string>? Tags { get; init; }

    /// <summary>
    /// Filter by launchpad id
    /// </summary>
    public IReadOnlyList<string>? LaunchpadIds { get; init; }

    /// <summary>
    /// Filter by the login of the authenticated user that created the Bitlink
    /// </summary>
    public IReadOnlyList<string>? EncodingLogin { get; init; }
}
