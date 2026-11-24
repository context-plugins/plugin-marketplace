using System;
using Skribble.Models;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the AddDocumentInSignatureRequest operation.
/// </summary>
public sealed record AddDocumentInSignatureRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Request body to add a Document
    /// </summary>
    public required SignatureDocumentUpload Body { get; init; }
}
