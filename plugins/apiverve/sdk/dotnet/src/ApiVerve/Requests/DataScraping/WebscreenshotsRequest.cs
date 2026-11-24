using ApiVerve.Models;

namespace ApiVerve.Requests.DataScraping;

/// <summary>
/// The inputs of the Webscreenshots operation.
/// </summary>
public sealed record WebscreenshotsRequest
{
    public required V1WebscreenshotsRequest Body { get; init; }
}
