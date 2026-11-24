namespace Givebutter.Requests.Funds;

/// <summary>
/// The inputs of the FundsShow operation.
/// </summary>
public sealed record FundsShowRequest
{
    /// <summary>
    /// The fund fid
    /// </summary>
    public required string? Fund { get; init; }
}
