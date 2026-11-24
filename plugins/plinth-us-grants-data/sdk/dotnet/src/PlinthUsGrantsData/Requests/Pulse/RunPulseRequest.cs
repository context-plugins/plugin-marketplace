using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the RunPulse operation.
/// </summary>
public sealed record RunPulseRequest
{
    public required string SubId { get; init; }

    /// <summary>
    /// Narrow the run to these checks, comma-separated: compliance, filings, grants, gov, people, web. Omit for the subscription's full set.
    /// </summary>
    public Checks2? Checks { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }
}
