using System;
using System.Collections.Generic;
using Lusha.Models.Enums;

namespace Lusha.Requests.Enrichment;

/// <summary>
/// The inputs of the SearchSingleCompanyV2 operation.
/// </summary>
public sealed record SearchSingleCompanyV2Request
{
    /// <summary>
    /// The domain name associated with the company
    /// </summary>
    public string? Domain { get; init; }

    /// <summary>
    /// The name of the company
    /// </summary>
    public string? Company { get; init; }

    /// <summary>
    /// A unique identifier for a Lusha company.
    /// </summary>
    public string? CompanyId { get; init; }

    /// <summary>
    /// Array of signal types to retrieve for the company.
    /// - <c>allSignals</c>: All available signal types
    /// <para>
    /// &gt; See the Signal Options endpoint for complete list of available signals and their categories
    /// </para>
    /// </summary>
    public IReadOnlyList<Signal1>? Signals { get; init; }

    /// <summary>
    /// Start date for signal retrieval in YYYY-MM-DD format. Defaults to 6 months ago if not specified.
    /// </summary>
    public DateTimeOffset? SignalsStartDate { get; init; }

    /// <summary>
    /// Expand coverage with partial company profiles
    /// </summary>
    public bool PartialCompany { get; init; } = true;
}
