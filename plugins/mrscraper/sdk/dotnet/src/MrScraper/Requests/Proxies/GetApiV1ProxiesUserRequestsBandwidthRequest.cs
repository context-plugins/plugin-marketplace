namespace MrScraper.Requests.Proxies;

/// <summary>
/// The inputs of the GetApiV1ProxiesUserRequestsBandwidth operation.
/// </summary>
public sealed record GetApiV1ProxiesUserRequestsBandwidthRequest
{
    public string? EndDate { get; init; }

    public string? StartDate { get; init; }
}
