namespace JuriSign.Requests.Bulk;

/// <summary>
/// The inputs of the ListBulkCampaigns operation.
/// </summary>
public sealed record ListBulkCampaignsRequest
{
    public string? Status { get; init; }

    public int PerPage { get; init; } = 20;
}
