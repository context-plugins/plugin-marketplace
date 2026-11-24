using System;
using System.Collections.Generic;

namespace Skribble.Requests.SignatureHandling;

/// <summary>
/// The inputs of the BulkGetSignatureRequests operation.
/// </summary>
public sealed record BulkGetSignatureRequestsRequest
{
    /// <summary>
    /// Array of SignatureRequest IDs to retrieve.
    /// </summary>
    public required IReadOnlyList<Guid> Body { get; init; }
}
