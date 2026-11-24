using System;

namespace WhoisFreaks.Requests.DatabasesIpWhois;

/// <summary>
/// The inputs of the DbIpWhois operation.
/// </summary>
public sealed record DbIpWhoisRequest
{
    public required DateTimeOffset Date { get; init; }
}
