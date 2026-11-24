namespace Givebutter.Requests.Funds;

/// <summary>
/// The inputs of the FundsDestroy operation.
/// </summary>
public sealed record FundsDestroyRequest
{
    /// <summary>
    /// The fund fid
    /// </summary>
    public required string? Fund { get; init; }
}
