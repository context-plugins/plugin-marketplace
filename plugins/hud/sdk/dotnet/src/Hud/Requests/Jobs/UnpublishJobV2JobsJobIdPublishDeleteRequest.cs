using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the UnpublishJobV2JobsJobIdPublishDelete operation.
/// </summary>
public sealed record UnpublishJobV2JobsJobIdPublishDeleteRequest
{
    public required Guid JobId { get; init; }
}
