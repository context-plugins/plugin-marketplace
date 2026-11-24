using System.Collections.Generic;
using Contentstack.Models;

namespace Contentstack.Requests.Events;

/// <summary>
/// The inputs of the TrackEvents operation.
/// </summary>
public sealed record TrackEventsRequest
{
    /// <summary>
    /// The UID of the Contentstack Personalize project.
    /// </summary>
    public required string XProjectUid { get; init; }

    /// <summary>
    /// The unique identifier for the end user whose events are being tracked.
    /// </summary>
    public required string XCsPersonalizeUserUid { get; init; }

    public required IReadOnlyList<TrackEvent> Body { get; init; }
}
