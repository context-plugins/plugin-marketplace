namespace Sapling.Requests.Proofreading;

/// <summary>
/// The inputs of the SaplingListCustomFilters operation.
/// </summary>
public sealed record SaplingListCustomFiltersRequest
{
    public bool ReturnUsage { get; init; } = false;
}
