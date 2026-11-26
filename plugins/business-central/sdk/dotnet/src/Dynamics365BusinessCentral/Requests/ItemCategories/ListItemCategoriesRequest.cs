using System;
using Dynamics365BusinessCentral.Core.Validation.Attributes;

namespace Dynamics365BusinessCentral.Requests.ItemCategories;

/// <summary>
/// The inputs of the ListItemCategories operation.
/// </summary>
public sealed record ListItemCategoriesRequest
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
