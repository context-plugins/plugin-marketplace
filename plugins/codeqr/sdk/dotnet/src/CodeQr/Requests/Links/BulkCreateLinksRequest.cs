using System.Collections.Generic;
using CodeQr.Models;

namespace CodeQr.Requests.Links;

/// <summary>
/// The inputs of the BulkCreateLinks operation.
/// </summary>
public sealed record BulkCreateLinksRequest
{
    public IReadOnlyList<LinksBulkRequest>? Body { get; init; }
}
