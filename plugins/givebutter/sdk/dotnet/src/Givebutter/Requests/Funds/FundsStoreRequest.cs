using Givebutter.Models;

namespace Givebutter.Requests.Funds;

/// <summary>
/// The inputs of the FundsStore operation.
/// </summary>
public sealed record FundsStoreRequest
{
    public required V1FundsRequest Body { get; init; }
}
