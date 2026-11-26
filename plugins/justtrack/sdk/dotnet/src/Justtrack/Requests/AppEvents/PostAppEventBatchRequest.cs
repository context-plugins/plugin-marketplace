using System.Collections.Generic;
using Justtrack.Models;

namespace Justtrack.Requests.AppEvents;

/// <summary>
/// The inputs of the PostAppEventBatch operation.
/// </summary>
public sealed record PostAppEventBatchRequest
{
    public required IReadOnlyList<AppEventBatch> Body { get; init; }
}
