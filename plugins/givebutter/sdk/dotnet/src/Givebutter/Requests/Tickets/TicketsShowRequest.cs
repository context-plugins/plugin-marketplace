namespace Givebutter.Requests.Tickets;

/// <summary>
/// The inputs of the TicketsShow operation.
/// </summary>
public sealed record TicketsShowRequest
{
    /// <summary>
    /// The ticket uid
    /// </summary>
    public required string? Ticket { get; init; }
}
