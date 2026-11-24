using System;

namespace WhoisFreaks.Requests.DatabasesIpGeolocation;

/// <summary>
/// The inputs of the DbIpCountry operation.
/// </summary>
public sealed record DbIpCountryRequest
{
    public required DateTimeOffset Date { get; init; }
}
