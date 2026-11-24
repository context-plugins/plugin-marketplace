using Curlec.Models;

namespace Curlec.Requests.QrCodes;

/// <summary>
/// The inputs of the UpdateQrCode operation.
/// </summary>
public sealed record UpdateQrCodeRequest
{
    /// <summary>
    /// QR code ID (qr_*).
    /// </summary>
    public required string Id { get; init; }

    public required PaymentsQrCodesRequest1 Body { get; init; }
}
