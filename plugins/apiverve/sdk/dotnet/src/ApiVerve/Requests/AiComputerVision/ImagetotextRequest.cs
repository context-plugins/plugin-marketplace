using ApiVerve.Core.Models;

namespace ApiVerve.Requests.AiComputerVision;

/// <summary>
/// The inputs of the Imagetotext operation.
/// </summary>
public sealed record ImagetotextRequest
{
    /// <summary>
    /// File to upload (accepted: .jpg, .jpeg, .png, .gif, max 5MB)
    /// </summary>
    public required BinaryContent Image { get; init; }
}
