using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record PaymentInstrumentEnableAccountUpdater
{
    /// <summary>
    /// When enabled, Finix automatically checks for updates with card networks. This Account Updater functionality:
    /// <list type="bullet">
    ///   <item><description>Automatically updates card details (e.g., number or expiration date) to maintain continuity of charges, increasing authorization rates.</description></item>
    ///   <item><description>Saves the cardholder the hassle of updating card details across <c>Merchants</c> for each of their <c>Subscriptions</c>.</description></item>
    /// </list>
    /// <para>
    /// <b>Note</b>: Cards created before the feature is enabled are unaffected by default. To include these cards, you can manually enable the Account Updater functionality for each card individually using a PUT request. Once enabled, you can link the card to this API call to trigger updates with card networks.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_updater_enabled")]
    public bool? AccountUpdaterEnabled { get; init; } = false;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
