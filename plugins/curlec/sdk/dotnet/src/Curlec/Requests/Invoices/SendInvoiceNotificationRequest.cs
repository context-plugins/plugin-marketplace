using Curlec.Models.Enums;

namespace Curlec.Requests.Invoices;

/// <summary>
/// The inputs of the SendInvoiceNotification operation.
/// </summary>
public sealed record SendInvoiceNotificationRequest
{
    /// <summary>
    /// Invoice ID (inv_*).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Notification channel.
    /// </summary>
    public required Medium Medium { get; init; }
}
