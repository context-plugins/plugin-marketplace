using System.Collections.Generic;

namespace Bitly.Requests.GroupsApi;

/// <summary>
/// The inputs of the GetGroupFeatureUsage operation.
/// </summary>
public sealed record GetGroupFeatureUsageRequest
{
    /// <summary>
    /// A GUID for a Bitly group
    /// </summary>
    public required string GroupGuid { get; init; }

    /// <summary>
    /// The limit name you would like usage for
    /// </summary>
    public IReadOnlyList<string>? Name { get; init; }
}
