namespace Givebutter.Requests.Messages;

/// <summary>
/// The inputs of the MessagesShow operation.
/// </summary>
public sealed record MessagesShowRequest
{
    /// <summary>
    /// The message ID
    /// </summary>
    public required int Message { get; init; }
}
