using Bitly.Models;

namespace Bitly.Requests.QrCodes;

/// <summary>
/// The inputs of the CreateQrCodePublic operation.
/// </summary>
public sealed record CreateQrCodePublicRequest
{
    public required PublicCreateQrCodeRequest Body { get; init; }
}
