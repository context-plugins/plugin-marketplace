using Skribble.Models;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the CreateSignatureRequest operation.
/// </summary>
public sealed record CreateSignatureRequestOperationRequest
{
    /// <summary>
    /// Request body to create a SignatureRequest object
    /// </summary>
    public required CreateSignatureRequest Body { get; init; }
}
