using WhoisFreaks.Models.Enums;

namespace WhoisFreaks.Requests.Whois;

/// <summary>
/// The inputs of the WhoisHistory operation.
/// </summary>
public sealed record WhoisHistoryRequest
{
    /// <summary>
    /// Domain to fetch historical WHOIS records for
    /// </summary>
    public required string DomainName { get; init; }

    /// <summary>
    /// Page number
    /// </summary>
    public int? Page { get; init; }

    public Format? Format { get; init; }
}
