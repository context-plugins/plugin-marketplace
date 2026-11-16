using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// Object containing notification preferences. At least one <c>buyer_details.requested_delivery_method</c> is required if notification preferences are set.
/// </summary>
public record NotificationPreferences1
{
    /// <summary>
    /// Whether to send a confirmation email to the user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("send_confirmation")]
    public bool? SendConfirmation { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
