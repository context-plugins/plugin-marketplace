using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Hud.Requests.Jobs;

/// <summary>
/// The inputs of the EnrichJobsV2JobsEnrichPost operation.
/// </summary>
public sealed record EnrichJobsV2JobsEnrichPostRequest
{
    [MaxLength(100)]
    public required IReadOnlyList<Guid> Body { get; init; }
}
