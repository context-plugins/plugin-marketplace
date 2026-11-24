using JuriSign.Models;

namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the CreateBulkTemplate operation.
/// </summary>
public sealed record CreateBulkTemplateRequest
{
    public required BulkTemplatesRequest Body { get; init; }
}
