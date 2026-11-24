using System;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the PublishJobV2JobsJobIdPublishPost operation.
/// </summary>
public sealed record PublishJobV2JobsJobIdPublishPostRequest
{
    public required Guid JobId { get; init; }
}
