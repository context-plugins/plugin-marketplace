using Curlec.Models;

namespace Curlec.Requests.QrCodes;

/// <summary>
/// The inputs of the CreateQrCode operation.
/// </summary>
public sealed record CreateQrCodeRequest
{
    public required PaymentsQrCodesRequest Body { get; init; }
}
