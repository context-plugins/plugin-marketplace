using Lusha.Models;

namespace Lusha.Requests.WebsiteVisits;

/// <summary>
/// The inputs of the GetWebsiteVisits operation.
/// </summary>
public sealed record GetWebsiteVisitsRequest
{
    public required WebsiteVisitsRequest Body { get; init; }
}
