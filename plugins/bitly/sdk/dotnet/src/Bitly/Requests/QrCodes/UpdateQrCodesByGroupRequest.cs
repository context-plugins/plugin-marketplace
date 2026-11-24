using Bitly.Models;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the UpdateQrCodesByGroup operation.
/// </summary>
public sealed record UpdateQrCodesByGroupRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    public required QrcBulkUpdateRequest Body { get; init; }
}
