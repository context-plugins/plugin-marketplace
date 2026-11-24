namespace Sapling.Requests.Account;

/// <summary>
/// The inputs of the SaplingAccountStatus operation.
/// </summary>
public sealed record SaplingAccountStatusRequest
{
    public bool ReturnUsage { get; init; } = false;
}
