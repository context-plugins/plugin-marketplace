using AtlassianCompass.Models.AnyOf;

namespace AtlassianCompass.Requests.Metrics;

/// <summary>
/// The inputs of the InsertMetricValue operation.
/// </summary>
public sealed record InsertMetricValueRequest
{
    public required CompassV1MetricsRequest Body { get; init; }
}
