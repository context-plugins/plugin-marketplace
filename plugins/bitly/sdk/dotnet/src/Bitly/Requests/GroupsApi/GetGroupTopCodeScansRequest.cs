using Bitly.Models.Enums;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroupTopCodeScans operation.
/// </summary>
public sealed record GetGroupTopCodeScansRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

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

    /// <summary>
    /// When true, ranks results by decoupled QR scan count and returns a TopLinksAndQRCodes response with links and QR codes partitioned into separate lists and a unified sorted_engagements ordering.
    /// </summary>
    public bool? Decoupled { get; init; }
}
