using Apibara.Core.Validation.Attributes;
using Apibara.Models.AnyOf;
using Apibara.Models.Enums;

namespace Apibara.Requests.ChangeStream;

/// <summary>
/// The inputs of the ListVehicleChanges operation.
/// </summary>
public sealed record ListVehicleChangesRequest
{
    /// <summary>
    /// Return events with sequence greater than this checkpoint. Start with 0 for the oldest retained event.
    /// </summary>
    [Minimum(0)]
    public long After { get; init; } = 0L;

    [Minimum(1)]
    [Maximum(2000)]
    public int Limit { get; init; } = 100;

    public Platform? Platform { get; init; }

    public EventType? EventType { get; init; }

    public bool? Terminal { get; init; }

    public string? LotNumber { get; init; }

    public string? Vin { get; init; }

    /// <summary>
    /// Optional current-record hydration. true/all adds the current full normalized vehicle record to every event where available; created adds it only to lot.created. Sync Center incremental feeds use created to stay self-contained without duplicating large media payloads on every bid/status event.
    /// </summary>
    public IncludeRecord1? IncludeRecord { get; init; }
}
