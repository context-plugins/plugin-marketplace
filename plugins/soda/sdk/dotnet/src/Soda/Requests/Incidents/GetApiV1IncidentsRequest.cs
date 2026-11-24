using System;

namespace Soda.Requests.Incidents;

/// <summary>
/// The inputs of the GetApiV1Incidents operation.
/// </summary>
public sealed record GetApiV1IncidentsRequest
{
    public string? DatasetId { get; init; }

    public DateTimeOffset? From { get; init; }

    public string? IncidentIds { get; init; }

    public string? LeadId { get; init; }

    public int? Page { get; init; }

    public string? Severity { get; init; }

    public int? Size { get; init; }

    public string? Status { get; init; }

    public DateTimeOffset? To { get; init; }
}
