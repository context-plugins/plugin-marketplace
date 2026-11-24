using DoiT.Models;

namespace DoiT.Requests.DataHub;

/// <summary>
/// The inputs of the DatahubImportProviderRecords operation.
/// </summary>
public sealed record DatahubImportProviderRecordsRequest
{
    public required DatahubV1ImportRequest Body { get; init; }
}
