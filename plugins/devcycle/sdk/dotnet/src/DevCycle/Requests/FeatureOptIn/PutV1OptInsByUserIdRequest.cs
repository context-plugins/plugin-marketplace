using System.Collections.Generic;

namespace DevCycle.Requests.FeatureOptIn;

/// <summary>
/// The inputs of the PutV1OptInsByUserId operation.
/// </summary>
public sealed record PutV1OptInsByUserIdRequest
{
    /// <summary>
    /// Unique user_id to identify the user
    /// </summary>
    public required string UserId { get; init; }

    /// <summary>
    /// SDK Key as defined in the dashboard for your DevCycle environment. One of the Authorization header or "sdkKey" query parameter is required to be set.
    /// </summary>
    public string? SdkKey { get; init; }

    /// <summary>
    /// A map of feature IDs to boolean values. The value should be true if the user has opted in, false otherwise
    /// </summary>
    public required IReadOnlyDictionary<string, bool> Body { get; init; }
}
