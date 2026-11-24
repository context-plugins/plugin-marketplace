using DoiT.Models;

namespace DoiT.Requests.CloudConnect;

/// <summary>
/// The inputs of the CreateAccountRole operation.
/// </summary>
public sealed record CreateAccountRoleRequest
{
    public required CoreV1CloudconnectAwsAccountsRequest Body { get; init; }
}
