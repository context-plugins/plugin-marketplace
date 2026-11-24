using System.Collections.Generic;
using Bitly.Models.Enums;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the ListQrMinimal operation.
/// </summary>
public sealed record ListQrMinimalRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    /// <summary>
    /// Whether or not QRCode has any render customizations (like color or shape changes)
    /// </summary>
    public HasRenderCustomizations HasRenderCustomizations { get; init; } = HasRenderCustomizations.Both;

    /// <summary>
    /// The quantity of items to be be returned
    /// </summary>
    public int Size { get; init; } = 50;

    /// <summary>
    /// Token used to search next batch of qr codes, only use response from API as input value.
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
    /// Filter by the login of the authenticated user that created the QR Code
    /// </summary>
    public IReadOnlyList<string>? CreatingLogin { get; init; }

    public IReadOnlyList<QrcType>? QrcType { get; init; }

    /// <summary>
    /// a filter value if the resource is a GS1 QR code
    /// </summary>
    public IsGs1 IsGs1 { get; init; } = IsGs1.Both;

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
}
