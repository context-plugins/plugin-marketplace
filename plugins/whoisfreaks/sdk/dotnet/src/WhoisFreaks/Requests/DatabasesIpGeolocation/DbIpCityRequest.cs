using System;

namespace WhoisFreaks.Requests.DatabasesIpGeolocation;

/// <summary>
/// The inputs of the DbIpCity operation.
/// </summary>
public sealed record DbIpCityRequest
{
    public required DateTimeOffset Date { get; init; }
}
