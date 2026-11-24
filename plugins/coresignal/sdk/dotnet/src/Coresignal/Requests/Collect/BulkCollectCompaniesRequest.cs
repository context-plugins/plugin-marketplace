using Coresignal.Models;

namespace Coresignal.Requests.Collect;

/// <summary>
/// The inputs of the BulkCollectCompanies operation.
/// </summary>
public sealed record BulkCollectCompaniesRequest
{
    public required BulkCollectRequest Body { get; init; }
}
