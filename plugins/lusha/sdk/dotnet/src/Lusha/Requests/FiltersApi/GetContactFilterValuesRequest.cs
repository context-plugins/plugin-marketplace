using System.ComponentModel.DataAnnotations;
using Lusha.Models.Enums;

namespace Lusha.Requests.FiltersApi;

/// <summary>
/// The inputs of the GetContactFilterValues operation.
/// </summary>
public sealed record GetContactFilterValuesRequest
{
    public required FilterType FilterType { get; init; }

    [StringLength(256, MinimumLength = 2)]
    public string? Query { get; init; }
}
