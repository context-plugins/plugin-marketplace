using Compabase.Models.Enums;

namespace Compabase.Requests.Companies;

/// <summary>
/// The inputs of the GetCeidgNipByNip operation.
/// </summary>
public sealed record GetCeidgNipByNipRequest
{
    /// <summary>
    /// NIP normalized to exactly 10 digits.
    /// </summary>
    public required string Nip { get; init; }

    /// <summary>
    /// Language for PKD labels and <c>companySummary</c> (one locale key in the response).
    /// </summary>
    public Locale Locale { get; init; } = Locale.En;
}
