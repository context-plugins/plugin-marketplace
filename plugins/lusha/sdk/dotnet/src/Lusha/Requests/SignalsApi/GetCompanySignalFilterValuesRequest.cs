using System.ComponentModel.DataAnnotations;
using Lusha.Models.Enums;

namespace Lusha.Requests.SignalsApi;

/// <summary>
/// The inputs of the GetCompanySignalFilterValues operation.
/// </summary>
public sealed record GetCompanySignalFilterValuesRequest
{
    public required FilterTypeLushaSignalsApi FilterType { get; init; }

    [StringLength(256, MinimumLength = 2)]
    public string? Query { get; init; }
}
