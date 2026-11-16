using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentEnableNetworkTokens
{
    /// <summary>
    /// When enabled, a "network token" replaces raw card details (e.g., the 16-digit PAN and expiration date) for transactions. Network tokens have several benefits:
    /// <list type="bullet">
    ///   <item><description>The token offers increased authorization rates, even for lost or stolen cards, as it remains valid while the physical card is replaced.</description></item>
    ///   <item><description>Visa reduces interchange fees when using network tokens.</description></item>
    ///   <item><description>Tokens enhance security by replacing card details with a non-sensitive string that is usable only within the Finix system.</description></item>
    /// </list>
    /// <para>
    /// <b>Note</b>: Cards created before the feature is enabled are unaffected. To include them, update the individual <c>Payment Instrument</c> to set <c>network_token_enabled</c> to <c>true</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network_token_enabled")]
    public bool? NetworkTokenEnabled { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
