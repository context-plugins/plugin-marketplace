using Curlec.Models;

namespace Curlec.Requests.LinkedAccounts;

/// <summary>
/// The inputs of the CreateLinkedAccount operation.
/// </summary>
public sealed record CreateLinkedAccountRequest
{
    public required V2AccountsRequest Body { get; init; }
}
