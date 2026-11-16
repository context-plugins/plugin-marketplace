using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record MerchantDefaultPartialAuthorizationEnabled
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> if you want to enable partial authorizations for a specific <c>Merchant</c>.</description></item>
    ///   <item><description>Partial authorizations enable the <c>Merchant</c> to collect a portion of the amount if the cardholder doesn't have the funds to cover the entire amount on their card.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_partial_authorization_enabled")]
    public bool? DefaultPartialAuthorizationEnabled { get; init; } = false;

    /// <summary>
    /// Set the acquiring processor. Use <c>DUMMY_V1</c> or <c>null</c> for your Sandbox. For more details on which processor to use, reach out to your Finix point of contact or email <see href="/guides/getting-started/support-at-finix/">Finix Support</see>.
    /// </summary>
    [JsonPropertyName("processor")]
    public required ProcessorRequest Processor { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
