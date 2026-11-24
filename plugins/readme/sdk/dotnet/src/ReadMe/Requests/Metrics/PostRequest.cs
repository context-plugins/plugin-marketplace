using System.Collections.Generic;
using ReadMe.Models;

namespace ReadMe.Requests.Metrics;

/// <summary>
/// The inputs of the PostRequest operation.
/// </summary>
public sealed record PostRequest
{
    public IReadOnlyList<MetricsRequest>? Body { get; init; }
}
