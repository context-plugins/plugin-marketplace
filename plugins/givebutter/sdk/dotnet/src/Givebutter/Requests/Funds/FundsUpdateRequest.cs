using Givebutter.Models;

namespace Givebutter.Requests.Funds;

/// <summary>
/// The inputs of the FundsUpdate operation.
/// </summary>
public sealed record FundsUpdateRequest
{
    /// <summary>
    /// The fund fid
    /// </summary>
    public required string? Fund { get; init; }

    public required V1FundsRequest Body { get; init; }
}
