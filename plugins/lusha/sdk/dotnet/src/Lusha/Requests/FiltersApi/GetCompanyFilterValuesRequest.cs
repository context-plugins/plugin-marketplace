using System.ComponentModel.DataAnnotations;
using Lusha.Models.Enums;

namespace Lusha.Requests.FiltersApi;

/// <summary>
/// The inputs of the GetCompanyFilterValues operation.
/// </summary>
public sealed record GetCompanyFilterValuesRequest
{
    public required FilterType1 FilterType { get; init; }

    [StringLength(256, MinimumLength = 2)]
    public string? Query { get; init; }
}
