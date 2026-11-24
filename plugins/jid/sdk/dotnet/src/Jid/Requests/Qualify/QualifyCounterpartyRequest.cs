using Jid.Models.AnyOf;

namespace Jid.Requests.Qualify;

/// <summary>
/// The inputs of the QualifyCounterparty operation.
/// </summary>
public sealed record QualifyCounterpartyRequest
{
    public required V1QualifyRequest2 Body { get; init; }
}
