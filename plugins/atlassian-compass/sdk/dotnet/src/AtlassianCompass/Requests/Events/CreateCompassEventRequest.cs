using AtlassianCompass.Models;

namespace AtlassianCompass.Requests.Events;

/// <summary>
/// The inputs of the CreateCompassEvent operation.
/// </summary>
public sealed record CreateCompassEventRequest
{
    public required CreateStreamlinedEventRequest Body { get; init; }
}
