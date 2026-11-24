namespace Givebutter.Requests.SsoCampaigns;

/// <summary>
/// The inputs of the SsoCampaignsShow operation.
/// </summary>
public sealed record SsoCampaignsShowRequest
{
    public required int Campaign { get; init; }
}
