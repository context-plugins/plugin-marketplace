using S1.Models.Enums;

namespace S1.Requests.Account;

/// <summary>
/// The inputs of the Usage operation.
/// </summary>
public sealed record UsageRequest
{
    public Period? Period { get; init; }
}
