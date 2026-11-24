using ApiVerve.Core.Models;

namespace ApiVerve.Requests.Images;

/// <summary>
/// The inputs of the Facedetect operation.
/// </summary>
public sealed record FacedetectRequest
{
    /// <summary>
    /// Minimum confidence threshold for face detection (0.1 to 1.0)
    /// </summary>
    public double? Confidence { get; init; }

    /// <summary>
    /// File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB)
    /// </summary>
    public BinaryContent? Image { get; init; }
}
