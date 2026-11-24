using ApiVerve.Core.Models;

namespace ApiVerve.Requests.Images;

/// <summary>
/// The inputs of the Nsfwimagedetector operation.
/// </summary>
public sealed record NsfwimagedetectorRequest
{
    /// <summary>
    /// File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB)
    /// </summary>
    public required BinaryContent Image { get; init; }
}
