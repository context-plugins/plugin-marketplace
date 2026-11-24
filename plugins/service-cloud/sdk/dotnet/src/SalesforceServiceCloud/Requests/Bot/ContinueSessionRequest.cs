using SalesforceServiceCloud.Models;

namespace SalesforceServiceCloud.Requests.Bot;

/// <summary>
/// The inputs of the ContinueSession operation.
/// </summary>
public sealed record ContinueSessionRequest
{
    /// <summary>
    /// ID of an active session, which is the <c>sessionId</c> returned by the bot when you start a session.
    /// </summary>
    public required string SessionId { get; init; }

    /// <summary>
    /// 18-character org ID of the Salesforce org associated with the bot.
    /// </summary>
    public required string XOrgId { get; init; }

    /// <summary>
    /// Request ID. A UUID in string format created by you to help with request tracking.
    /// </summary>
    public string? XRequestId { get; init; }

    /// <summary>
    /// Internal runtime CRC, which is the <c>X-Runtime-CRC</c> value from previous response.
    /// </summary>
    public string? XRuntimeCrc { get; init; }

    /// <summary>
    /// Request payload to continue the chat.
    /// </summary>
    public required ChatMessageEnvelope Body { get; init; }
}
