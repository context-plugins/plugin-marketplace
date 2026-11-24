using Compabase.Models.Enums;

namespace Compabase.Requests.Tenders;

/// <summary>
/// The inputs of the GetTenders operation.
/// </summary>
public sealed record GetTendersRequest
{
    /// <summary>
    /// Open tenders or awarded contracts.
    /// </summary>
    public Status? Status { get; init; }

    /// <summary>
    /// CPV group or 2-digit CPV division.
    /// </summary>
    public string? Industry { get; init; }

    /// <summary>
    /// National (BZP) or EU (TED) notices.
    /// </summary>
    public Source? Source { get; init; }

    /// <summary>
    /// Voivodeship.
    /// </summary>
    public string? Region { get; init; }

    /// <summary>
    /// City of the contracting authority.
    /// </summary>
    public string? City { get; init; }

    /// <summary>
    /// Postal code prefix.
    /// </summary>
    public string? Postal { get; init; }

    /// <summary>
    /// Contract type.
    /// </summary>
    public Kind? Kind { get; init; }

    /// <summary>
    /// Minimum estimated value (in <c>currency</c>).
    /// </summary>
    public double? ValueMin { get; init; }

    /// <summary>
    /// Maximum estimated value (in <c>currency</c>).
    /// </summary>
    public double? ValueMax { get; init; }

    /// <summary>
    /// Currency of value filters and returned values.
    /// </summary>
    public Currency? Currency { get; init; }

    /// <summary>
    /// Page size.
    /// </summary>
    public Limit? Limit { get; init; }

    /// <summary>
    /// Zero-based offset (max 2000).
    /// </summary>
    public int? Offset { get; init; }
}
