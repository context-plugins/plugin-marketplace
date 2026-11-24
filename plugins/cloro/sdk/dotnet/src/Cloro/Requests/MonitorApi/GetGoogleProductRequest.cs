using Cloro.Models;

namespace Cloro.Requests.MonitorApi;

/// <summary>
/// The inputs of the GetGoogleProduct operation.
/// </summary>
public sealed record GetGoogleProductRequest
{
    /// <summary>
    /// The token from a Google Search shopping card
    /// </summary>
    public required GoogleProductRequest Body { get; init; }
}
