using System;

namespace Skribble.Requests.SendTo;

/// <summary>
/// The inputs of the DeleteSendTo operation.
/// </summary>
public sealed record DeleteSendToRequest
{
    /// <summary>
    /// Unique ID received when creating the Send-To object
    /// </summary>
    public required Guid SendToId { get; init; }

    /// <summary>
    /// Access code received when creating the Send-To object
    /// </summary>
    public required Guid XAccesscode { get; init; }
}
