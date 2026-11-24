namespace Bitly.Requests.CampaignsApi;

/// <summary>
/// The inputs of the GetCampaigns operation.
/// </summary>
public sealed record GetCampaignsRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public string? GroupGuid { get; init; }
}
