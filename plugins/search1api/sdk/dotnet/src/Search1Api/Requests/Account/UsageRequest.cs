using Search1Api.Models.Enums;

namespace Search1Api.Requests.Account;

/// <summary>
/// The inputs of the Usage operation.
/// </summary>
public sealed record UsageRequest
{
    public Period? Period { get; init; }
}
