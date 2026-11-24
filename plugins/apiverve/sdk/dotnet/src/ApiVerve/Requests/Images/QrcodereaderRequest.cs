using ApiVerve.Core.Models;

namespace ApiVerve.Requests.Images;

/// <summary>
/// The inputs of the Qrcodereader operation.
/// </summary>
public sealed record QrcodereaderRequest
{
    /// <summary>
    /// File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
    /// </summary>
    public required BinaryContent Image { get; init; }
}
