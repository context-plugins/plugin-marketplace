using Curlec.Models.Enums;

namespace Curlec.Requests.PaymentLinks;

/// <summary>
/// The inputs of the ResendPaymentLinkNotification operation.
/// </summary>
public sealed record ResendPaymentLinkNotificationRequest
{
    /// <summary>
    /// Payment Link ID (plink_*).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Notification medium.
    /// </summary>
    public required Medium Medium { get; init; }
}
