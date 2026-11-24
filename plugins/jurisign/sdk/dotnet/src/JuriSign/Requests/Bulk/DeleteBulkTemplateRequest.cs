using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the DeleteBulkTemplate operation.
/// </summary>
public sealed record DeleteBulkTemplateRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
