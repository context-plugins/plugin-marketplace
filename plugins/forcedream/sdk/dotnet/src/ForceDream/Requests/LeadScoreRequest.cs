using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the LeadScore operation.
/// </summary>
public sealed record LeadScoreRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleLeadScoreRequest? Body { get; init; }
}
