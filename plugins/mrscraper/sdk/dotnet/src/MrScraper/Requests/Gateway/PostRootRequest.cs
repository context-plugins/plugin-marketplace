using MrScraper.Models;

namespace MrScraper.Requests.Gateway;

/// <summary>
/// The inputs of the PostRoot operation.
/// </summary>
public sealed record PostRootRequest
{
    /// <summary>
    /// Queue the scrape and return a task ID immediately
    /// </summary>
    public bool? Async { get; init; }

    /// <summary>
    /// Use the sync scraper upstream via the beta flag; alternatively set beta: true in the JSON body
    /// </summary>
    public bool? Beta { get; init; }

    /// <summary>
    /// Request body with domain, action, and task details
    /// </summary>
    public required GatewayRequestBody Body { get; init; }
}
