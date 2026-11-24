using System;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the GetBulkTemplate operation.
/// </summary>
public sealed record GetBulkTemplateRequest
{
    /// <summary>
    /// Resource UUID
    /// </summary>
    public required Guid Id { get; init; }
}
