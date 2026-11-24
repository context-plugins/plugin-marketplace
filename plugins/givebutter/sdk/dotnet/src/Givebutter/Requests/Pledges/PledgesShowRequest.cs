namespace Givebutter.Requests.Pledges;

/// <summary>
/// The inputs of the PledgesShow operation.
/// </summary>
public sealed record PledgesShowRequest
{
    /// <summary>
    /// The pledge ID
    /// </summary>
    public required int Pledge { get; init; }
}
