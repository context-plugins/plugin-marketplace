using System;
using MicrosoftDynamicsNav.Core.Validation.Attributes;

namespace MicrosoftDynamicsNav.Requests.CurrencyApi;

/// <summary>
/// The inputs of the ListCurrencies operation.
/// </summary>
public sealed record ListCurrenciesRequest
{
    /// <summary>
    /// The unique identifier of the company
    /// </summary>
    public required Guid CompanyId { get; init; }

    /// <summary>
    /// Maximum number of items to return
    /// </summary>
    [Minimum(0)]
    public int? Top { get; init; }

    /// <summary>
    /// Number of items to skip
    /// </summary>
    [Minimum(0)]
    public int? Skip { get; init; }

    /// <summary>
    /// OData filter expression
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Comma-separated list of properties to include in the response
    /// </summary>
    public string? Select { get; init; }
}
