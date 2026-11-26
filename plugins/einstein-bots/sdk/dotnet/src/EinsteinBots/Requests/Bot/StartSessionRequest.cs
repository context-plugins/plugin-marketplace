using EinsteinBots.Models;

namespace EinsteinBots.Requests.Bot;

/// <summary>
/// The inputs of the StartSession operation.
/// </summary>
public sealed record StartSessionRequest
{
    /// <summary>
    /// ID of the Einstein Bot that you want to interact with.
    /// </summary>
    public required string BotId { get; init; }

    /// <summary>
    /// 18-character org ID of the Salesforce org associated with the bot.
    /// </summary>
    public required string XOrgId { get; init; }

    /// <summary>
    /// Request ID. A UUID in string format created by you to help with request tracking.
    /// </summary>
    public string? XRequestId { get; init; }

    /// <summary>
    /// Request payload to initiate a session.
    /// </summary>
    public required InitMessageEnvelope Body { get; init; }
}
