using Hightouch.Models;

namespace Hightouch.Requests.Idr;

/// <summary>
/// The inputs of the TriggerIdrRun operation.
/// </summary>
public sealed record TriggerIdrRunRequest
{
    public required string GraphId { get; init; }

    public TriggerRunIdrInput? Body { get; init; }
}
