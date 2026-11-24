using Hightouch.Models;

namespace Hightouch.Requests.Syncs;

/// <summary>
/// The inputs of the TriggerRunCustom operation.
/// </summary>
public sealed record TriggerRunCustomRequest
{
    public required TriggerRunCustomInput Body { get; init; }
}
