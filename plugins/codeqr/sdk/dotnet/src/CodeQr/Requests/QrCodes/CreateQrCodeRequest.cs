using CodeQr.Models;

namespace CodeQr.Requests.QrCodes;

/// <summary>
/// The inputs of the CreateQrCode operation.
/// </summary>
public sealed record CreateQrCodeRequest
{
    public QrcodesRequest? Body { get; init; }
}
