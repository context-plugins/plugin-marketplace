using Curlec.Models;

namespace Curlec.Requests.VirtualAccounts;

/// <summary>
/// The inputs of the CreateVirtualAccount operation.
/// </summary>
public sealed record CreateVirtualAccountRequest
{
    public required VirtualAccountsRequest Body { get; init; }
}
