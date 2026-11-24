using Soda.Models.Enums;

namespace Soda.Requests.DataStandards;

/// <summary>
/// The inputs of the GetApiV1DataStandards operation.
/// </summary>
public sealed record GetApiV1DataStandardsRequest
{
    public int? Page { get; init; }

    public string? Search { get; init; }

    public int? Size { get; init; }

    public DataStandardSortFieldDto? Sort { get; init; }

    public DataStandardStatusDto? Status { get; init; }
}
