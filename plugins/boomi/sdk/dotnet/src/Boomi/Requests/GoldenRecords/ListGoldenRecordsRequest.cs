using Boomi.Core.Validation.Attributes;

namespace Boomi.Requests.GoldenRecords;

/// <summary>
/// The inputs of the ListGoldenRecords operation.
/// </summary>
public sealed record ListGoldenRecordsRequest
{
    /// <summary>
    /// Unique identifier of the DataHub repository.
    /// </summary>
    public required string RepositoryId { get; init; }

    /// <summary>
    /// Unique identifier of the master data domain (universe).
    /// </summary>
    public required string UniverseId { get; init; }

    /// <summary>
    /// Number of records per page.
    /// </summary>
    [Minimum(1)]
    [Maximum(200)]
    public int PageSize { get; init; } = 100;

    /// <summary>
    /// Pagination token from a previous response.
    /// </summary>
    public string? PageToken { get; init; }
}
