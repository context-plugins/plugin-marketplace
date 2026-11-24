namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the UpgradeQrCodeToBitlink operation.
/// </summary>
public sealed record UpgradeQrCodeToBitlinkRequest
{
    public required string QrcodeId { get; init; }
}
