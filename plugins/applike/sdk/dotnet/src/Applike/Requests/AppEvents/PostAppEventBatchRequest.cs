using System.Collections.Generic;
using Applike.Models;

namespace Applike.Requests.AppEvents;

/// <summary>
/// The inputs of the PostAppEventBatch operation.
/// </summary>
public sealed record PostAppEventBatchRequest
{
    public required IReadOnlyList<AppEventBatch> Body { get; init; }
}
