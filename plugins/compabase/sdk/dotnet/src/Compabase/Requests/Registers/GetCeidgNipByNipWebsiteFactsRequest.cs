namespace Compabase.Requests.Registers;

/// <summary>
/// The inputs of the GetCeidgNipByNipWebsiteFacts operation.
/// </summary>
public sealed record GetCeidgNipByNipWebsiteFactsRequest
{
    /// <summary>
    /// 10-digit NIP (non-digits are stripped).
    /// </summary>
    public required string Nip { get; init; }
}
