using Jid.Models;

namespace Jid.Requests.Qualify;

/// <summary>
/// The inputs of the RecordOutcome operation.
/// </summary>
public sealed record RecordOutcomeRequest
{
    public required V1OutcomesRequest Body { get; init; }
}
