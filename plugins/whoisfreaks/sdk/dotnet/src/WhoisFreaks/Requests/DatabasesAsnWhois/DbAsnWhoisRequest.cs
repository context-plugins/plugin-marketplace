using System;

namespace WhoisFreaks.Requests.DatabasesAsnWhois;

/// <summary>
/// The inputs of the DbAsnWhois operation.
/// </summary>
public sealed record DbAsnWhoisRequest
{
    public required DateTimeOffset Date { get; init; }
}
