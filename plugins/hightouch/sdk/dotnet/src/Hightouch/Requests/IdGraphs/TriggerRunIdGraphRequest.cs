using Hightouch.Models;

namespace Hightouch.Requests.IdGraphs;

/// <summary>
/// The inputs of the TriggerRunIdGraph operation.
/// </summary>
public sealed record TriggerRunIdGraphRequest
{
    public required string GraphId { get; init; }

    public TriggerRunIdrInput? Body { get; init; }
}
