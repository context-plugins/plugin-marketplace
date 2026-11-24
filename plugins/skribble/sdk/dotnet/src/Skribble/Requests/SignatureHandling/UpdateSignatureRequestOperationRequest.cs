using Skribble.Models;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the UpdateSignatureRequest operation.
/// </summary>
public sealed record UpdateSignatureRequestOperationRequest
{
    /// <summary>
    /// Request body to update a SignatureRequest object
    /// </summary>
    public required UpdateSignatureRequest Body { get; init; }
}
