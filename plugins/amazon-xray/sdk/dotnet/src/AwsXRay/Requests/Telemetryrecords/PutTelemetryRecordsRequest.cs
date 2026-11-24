using AwsXRay.Models;

namespace AwsXRay.Requests.Telemetryrecords;

/// <summary>
/// The inputs of the PutTelemetryRecords operation.
/// </summary>
public sealed record PutTelemetryRecordsRequest
{
    public TelemetryRecordsRequest? Body { get; init; }
}
