using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record UpdateWebhookEnableDisableWebhookEvents
{
    /// <summary>
    /// Enable or disable the <c>Webhook</c>. Disabled webhooks will not receive events.
    /// <list type="bullet">
    ///   <item><description><c>true</c> - webhook events are sent to the <c>url</c>.</description></item>
    ///   <item><description><c>false</c> - webhook events are not sent to the <c>url</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
