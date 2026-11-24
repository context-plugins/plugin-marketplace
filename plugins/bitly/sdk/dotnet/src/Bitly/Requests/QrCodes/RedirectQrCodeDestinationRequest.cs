using Bitly.Models;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the RedirectQrCodeDestination operation.
/// </summary>
public sealed record RedirectQrCodeDestinationRequest
{
    public required string QrcodeId { get; init; }

    public required RedirectQrCodeRequest Body { get; init; }
}
