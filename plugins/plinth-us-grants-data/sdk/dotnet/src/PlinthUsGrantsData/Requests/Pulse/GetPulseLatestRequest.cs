using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the GetPulseLatest operation.
/// </summary>
public sealed record GetPulseLatestRequest
{
    public required string SubId { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }
}
