namespace Compabase.Requests.Registers;

/// <summary>
/// The inputs of the GetCeidgNipByNipProcurementCounterparties operation.
/// </summary>
public sealed record GetCeidgNipByNipProcurementCounterpartiesRequest
{
    /// <summary>
    /// 10-digit NIP (non-digits are stripped).
    /// </summary>
    public required string Nip { get; init; }
}
