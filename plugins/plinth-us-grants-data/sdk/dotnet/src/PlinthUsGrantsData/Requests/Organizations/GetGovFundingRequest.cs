using PlinthUsGrantsData.Models.AnyOf;
using PlinthUsGrantsData.Models.Enums;

namespace PlinthUsGrantsData.Requests.Organizations;

/// <summary>
/// The inputs of the GetGovFunding operation.
/// </summary>
public sealed record GetGovFundingRequest
{
    public required string Ein { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }

    /// <summary>
    /// Restrict to one federal fiscal year of awards (October–September), e.g. 2023.
    /// </summary>
    public FiscalYear? FiscalYear { get; init; }

    /// <summary>
    /// <c>federal</c> for USAspending awards or <c>state</c> for the state checkbooks; omit for both.
    /// </summary>
    public KindVariantYqwpsz? Kind { get; init; }

    /// <summary>
    /// Two-letter state code, for the state-checkbook side only — whose books the money came from, not where the recipient sits.
    /// </summary>
    public State1? State { get; init; }

    /// <summary>
    /// Maximum rows to return.
    /// </summary>
    public int Limit { get; init; } = 200;

    /// <summary>
    /// Return a canned example instead of querying the corpus. <b>Needs no API key and is not metered.</b> <c>1</c> is the plain success case; <c>list</c> enumerates what each named case demonstrates. The organizations in an example are invented — only the shape is real.
    /// </summary>
    public Example1? Example { get; init; }
}
