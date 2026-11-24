using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the TaxJarLookup operation.
/// </summary>
public sealed record TaxJarLookupRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleTaxJarLookupRequest? Body { get; init; }
}
