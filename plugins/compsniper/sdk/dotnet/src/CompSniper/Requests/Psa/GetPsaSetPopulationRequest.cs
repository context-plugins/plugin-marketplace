using System.ComponentModel.DataAnnotations;
using CompSniper.Models.Enums;

namespace CompSniper.Requests.Psa;

/// <summary>
/// The inputs of the GetPsaSetPopulation operation.
/// </summary>
public sealed record GetPsaSetPopulationRequest
{
    [RegularExpression("^\\d{1,12}$")]
    public string? HeadingId { get; init; }

    public string? Url { get; init; }

    /// <summary>
    /// Omit to use temporary carryover first, then monthly quota, then purchased credits. Set to credits to spend a purchased credit directly. Failed searches are not charged.
    /// </summary>
    public XCreditSource? XCreditSource { get; init; }
}
