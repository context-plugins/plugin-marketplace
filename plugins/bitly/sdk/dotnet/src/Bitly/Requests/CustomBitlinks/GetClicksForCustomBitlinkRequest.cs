using Bitly.Models.Enums;

namespace Bitly.Requests.CustomBitlinks;

/// <summary>
/// The inputs of the GetClicksForCustomBitlink operation.
/// </summary>
public sealed record GetClicksForCustomBitlinkRequest
{
    /// <summary>
    /// A Custom Bitlink made of the domain and keyword
    /// </summary>
    public required string CustomBitlink { get; init; }

    /// <summary>
    /// A unit of time
    /// </summary>
    public TimeUnit Unit { get; init; } = TimeUnit.Day;

    /// <summary>
    /// An integer representing the time units to query data for. pass -1 to return all units of time
    /// </summary>
    public int Units { get; init; } = -1;

    /// <summary>
    /// An ISO-8601 timestamp, indicating the most recent time for which to pull metrics. Will default to current time. Timestamp values should be url encoded (i.e. replace '+' with '%2B' and ':' with '%3A'; 2022-02-02T15:53:02+0000 becomes 2022-02-02T15%3A53%3A02%2B0000)
    /// </summary>
    public string? UnitReference { get; init; }
}
