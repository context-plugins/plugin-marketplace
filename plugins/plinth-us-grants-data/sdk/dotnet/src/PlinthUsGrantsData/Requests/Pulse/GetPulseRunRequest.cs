using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Requests.Pulse;

/// <summary>
/// The inputs of the GetPulseRun operation.
/// </summary>
public sealed record GetPulseRunRequest
{
    public required string SubId { get; init; }

    public required string RunId { get; init; }

    /// <summary>
    /// json (default) or xml.
    /// </summary>
    public Format1? Format { get; init; }
}
