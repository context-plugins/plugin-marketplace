using System;
using JuriSign.Models;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the UpdateBulkTemplate operation.
/// </summary>
public sealed record UpdateBulkTemplateRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }

    public BulkTemplatesRequest1? Body { get; init; }
}
