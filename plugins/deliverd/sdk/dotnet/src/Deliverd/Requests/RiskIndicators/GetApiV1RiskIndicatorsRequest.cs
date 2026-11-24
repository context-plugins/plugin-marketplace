using System.ComponentModel.DataAnnotations;

namespace Deliverd.Requests.RiskIndicators;

/// <summary>
/// The inputs of the GetApiV1RiskIndicators operation.
/// </summary>
public sealed record GetApiV1RiskIndicatorsRequest
{
    [RegularExpression("^\\d{4}-(0[1-9]|1[0-2])$")]
    public string? Period { get; init; }
}
