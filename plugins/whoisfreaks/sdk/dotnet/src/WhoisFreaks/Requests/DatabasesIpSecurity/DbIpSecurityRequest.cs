using System;

namespace WhoisFreaks.Requests.DatabasesIpSecurity;

/// <summary>
/// The inputs of the DbIpSecurity operation.
/// </summary>
public sealed record DbIpSecurityRequest
{
    public required DateTimeOffset Date { get; init; }
}
