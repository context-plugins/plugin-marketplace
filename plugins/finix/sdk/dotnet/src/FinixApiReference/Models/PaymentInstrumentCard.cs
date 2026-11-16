using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Core.Validation.Attributes;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record PaymentInstrumentCard
{
    /// <summary>
    /// The ID of the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [MinLength(1)]
    public string? Id { get; init; }

    /// <summary>
    /// Timestamp of when the object was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_at")]
    public DateTimeOffset? CreatedAt { get; init; }

    /// <summary>
    /// Timestamp of when the object was last updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("updated_at")]
    public DateTimeOffset? UpdatedAt { get; init; }

    /// <summary>
    /// The method by which the resource was created.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("created_via")]
    public CreatedVia? CreatedVia { get; init; }

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

    /// <summary>
    /// The address of the card owner. Including a postal or zip code when creating a <c>Payment Instrument</c> can lower the interchange on credit card transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Details the results of verifying <c>address</c> with the issuing bank.</description></item>
    ///   <item><description>Set to <b>UNKNOWN</b> when <c>address</c> gets updated.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address_verification")]
    public AddressVerification3? AddressVerification { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Bank Identification number for the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bin")]
    public string? Bin { get; init; }

    /// <summary>
    /// The <c>brand</c> of the card saved in the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("brand")]
    public Brand? Brand { get; init; }

    /// <summary>
    /// The type of payment card saved in the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("card_type")]
    public CardType? CardType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("country")]
    public Country? Country { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// A code indicating why the <c>Payment Instrument</c> was disabled. This field is set when:
    /// <list type="bullet">
    ///   <item><description>The system automatically disables the <c>Payment Instrument</c>.</description></item>
    ///   <item><description>A user manually disables it (returns <c>USER_INITIATED</c>).</description></item>
    /// </list>
    /// <para>
    /// See <c>disabled_message</c> for all possible codes and their descriptions.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled_code")]
    public DisabledCode? DisabledCode { get; init; }

    /// <summary>
    /// A human-readable message explaining why the <c>Payment Instrument</c> was disabled. This field provides additional context for the <c>disabled_code</c>.
    /// <para>
    /// The possible error codes/messages are:
    /// - <c>CARD_ACCOUNT_CLOSED</c>: "The card account has been closed. The card has been disabled to prevent further use."
    /// - <c>INVALID_ACCOUNT_NUMBER</c>: "The card number is not valid. The card has been disabled to prevent further use."
    /// - <c>LOST_OR_STOLEN_CARD</c>: "The card is reported lost or stolen. The card has been disabled to prevent further use."
    /// - <c>NON_RELOADABLE_INSUFFICIENT_FUNDS</c>: "The card has insufficient funds for the transaction and is non-reloadable. The card has been disabled to prevent further use."
    /// - <c>PICK_UP_CARD</c>: "The card is reported lost or stolen. The card has been disabled to prevent further use."
    /// - <c>RESTRICTED_CARD</c>: "The card has a restriction preventing approval for this transaction. The card has been disabled to prevent further use."
    /// - <c>USER_INITIATED</c>: "The card has been disabled by a user."
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled_message")]
    public string? DisabledMessage { get; init; }

    /// <summary>
    /// Indicates whether the <c>Payment Instrument</c> resource is enabled. The default value is <c>true</c>; set it to <c>false</c> to disable the <c>Payment Instrument</c>. The user or the system can update this field to enable or disable the payment instrument.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Expiration month (e.g. 12 for December).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_month")]
    [Minimum(1)]
    [Maximum(12)]
    public int? ExpirationMonth { get; init; }

    /// <summary>
    /// 4-digit expiration year.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expiration_year")]
    [Minimum(1)]
    public int? ExpirationYear { get; init; }

    /// <summary>
    /// Details if Fast Funds is enabled for the card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fast_funds_indicator")]
    public string? FastFundsIndicator { get; init; }

    /// <summary>
    /// Unique ID that represents the tokenized card data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fingerprint")]
    public string? Fingerprint { get; init; }

    /// <summary>
    /// The ID of the <c>Identity</c> used to create the resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// The type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_type")]
    public InstrumentType? InstrumentType { get; init; }

    /// <summary>
    /// The Alpha-3 Code of the country the card was issued in.
    /// <para>
    /// In addition, the following values are possible:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>NON_USA</c> - The card was issued outside of the United States.</description></item>
    ///   <item><description><c>UNKNOWN</c> - The processor did not return an issuer country for this particular BIN.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("issuer_country")]
    public IssuerCountry? IssuerCountry { get; init; }

    /// <summary>
    /// Last four digits of the card.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("last_four")]
    public string? LastFour { get; init; }

    /// <summary>
    /// The name of the card owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

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

    /// <summary>
    /// The state of the network token. The possible enum values are as follows:
    /// <list type="bullet">
    ///   <item><description><c>NOT_ENABLED</c>: The <c>network_token_state</c> is <c>NOT_ENABLED</c> when the value of <c>network_token_enabled</c> on the <c>Payment Instrument</c> is <c>false</c>.</description></item>
    ///   <item><description><c>PENDING</c>: Immediately after Finix enables network tokens for a specific card, <c>network_token_state</c> is initially set to <c>PENDING</c>.</description></item>
    ///   <item><description><c>ACTIVE</c>: After Finix receives the network token successfully from the card network, <c>network_token_state</c> updates to <c>ACTIVE</c>.</description></item>
    ///   <item><description><c>FAILED</c>: In the event that there is an issue with the card network such as service becomes unavailable, <c>FAILED</c> is returned.</description></item>
    ///   <item><description><c>SUSPENDED</c>: When the issuing bank does not allow the network token to be used in transactions, <c>SUSPENDED</c> is returned.</description></item>
    ///   <item><description><c>CLOSED</c>: In the event that the issuing bank has closed the card permanently, <c>CLOSED</c> is returned.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("network_token_state")]
    public NetworkTokenState? NetworkTokenState { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payload_type")]
    public PayloadType? PayloadType { get; init; }

    /// <summary>
    /// Indicates whether the card is blocked from online gambling transactions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("online_gambing_block_indicator")]
    public string? OnlineGambingBlockIndicator { get; init; }

    /// <summary>
    /// Details if the card is enabled to receive push-to-card disbursements.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("push_funds_block_indicator")]
    public string? PushFundsBlockIndicator { get; init; }

    /// <summary>
    /// Details the results of verifying the cardholder's name with the issuing bank. Returns <c>null</c> if <c>name_verification_details</c> was not included in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name_verification_results")]
    public NameVerificationResults? NameVerificationResults { get; init; }

    /// <summary>
    /// Details the results of the Card Verification Code check.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("security_code_verification")]
    public SecurityCodeVerification? SecurityCodeVerification { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    /// <summary>
    /// This field is not applicable to payment cards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party")]
    public string? ThirdParty { get; init; }

    /// <summary>
    /// This field is not applicable to payment cards.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party_token")]
    public string? ThirdPartyToken { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type18? Type { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links17? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
