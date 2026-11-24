using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Whois;

/// <summary>
/// The inputs of the WhoisReverse operation.
/// </summary>
public sealed record WhoisReverseRequest
{
    /// <summary>
    /// Keyword to search across WHOIS records
    /// </summary>
    public required string Keyword { get; init; }

    /// <summary>
    /// Page number
    /// </summary>
    public int? Page { get; init; }

    public Format? Format { get; init; }
}
