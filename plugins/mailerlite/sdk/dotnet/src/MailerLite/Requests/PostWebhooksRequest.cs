using MailerLite.Models;

namespace MailerLite.Requests;

/// <summary>
/// The inputs of the PostWebhooks operation.
/// </summary>
public sealed record PostWebhooksRequest
{
    /// <summary>
    /// Created webhook object
    /// </summary>
    public required Webhook Body { get; init; }
}
