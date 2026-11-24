namespace Givebutter.Requests.Campaigns;

/// <summary>
/// The inputs of the CampaignsIndex operation.
/// </summary>
public sealed record CampaignsIndexRequest
{
    public string? Scope { get; init; }
}
