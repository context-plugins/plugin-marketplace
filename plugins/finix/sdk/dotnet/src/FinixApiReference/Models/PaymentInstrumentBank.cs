using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record PaymentInstrumentBank
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
    /// The address of the bank account owner.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("address")]
    public Address? Address { get; init; }

    /// <summary>
    /// The bank account type. Plaid returns <c>CHECKING</c> or <c>SAVING</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("account_type")]
    public AccountType? AccountType { get; init; }

    /// <summary>
    /// ID of the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    [MinLength(1)]
    public string? Application { get; init; }

    /// <summary>
    /// Possible values returned when <c>attempt_bank_account_validation_check</c> is <c>true</c> or the <c>Payment Instrument</c> is used for a <c>Transfer</c>:
    /// <list type="bullet">
    ///   <item><description><c>INCONCLUSIVE</c>: A verification check was conducted, but the bank account could not be found or verified with the issuing bank. Please contact the buyer to confirm the details collected or request an alternate method of payment.</description></item>
    ///   <item><description><c>INVALID</c>: The Payment Instrument was involved in transactions that returned one or more of the following ACH errors:
    ///     <list type="bullet">
    ///       <item><description>Account Does Not Allow ACH Transactions</description></item>
    ///       <item><description>Account is Closed</description></item>
    ///       <item><description>Account Funds are Frozen</description></item>
    ///       <item><description>Deceased Account Holder</description></item>
    ///       <item><description>Invalid Account Number</description></item>
    ///       <item><description>Invalid Routing Number</description></item>
    ///       <item><description>No Account on File</description></item>
    ///     </list>
    ///   </description></item>
    /// </list>
    /// <para>
    ///     For further details about the different ACH failure codes, please refer to ACH Direct Debit documentation.
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>NOT_ATTEMPTED</c>: A verification check was not performed, and the Payment Instrument has not been used to create a Transfer or Authorization.</description></item>
    ///   <item><description><c>VALID</c>: The bank account was successfully verified. The Payment Instrument is eligible for use in creating ACH Direct Debits.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_account_validation_check")]
    public BankAccountValidationCheck? BankAccountValidationCheck { get; init; } = BankAccountValidationCheck.NotAttempted;

    /// <summary>
    /// The routing number of the bank account.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bank_code")]
    public string? BankCode { get; init; }

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
    /// A code indicating why the <c>Payment Instrument</c> was disabled.
    /// <para>
    /// See <c>disabled_message</c> for possible error codes and their messages.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled_code")]
    public DisabledCode1? DisabledCode { get; init; }

    /// <summary>
    /// A human-readable message explaining why the <c>Payment Instrument</c> was disabled. This field provides additional context for the <c>disabled_code</c>.
    /// <para>
    /// The possible error codes/messages are:
    /// - <c>INVALID_BANK_ACCOUNT_ROUTING_NUMBER</c>: Bank account routing number was invalid.
    /// - <c>MICRODEPOSIT_RETURNED</c>: A microdeposit for this bank account was returned and the account has been disabled.
    /// - <c>MICRODEPOSIT_VERIFICATION_REQUIRED</c>: Bank account is pending microdeposit verification.
    /// - <c>MICRODEPOSIT_VERIFICATION_ATTEMPTS_EXCEEDED</c>: Microdeposit verification has failed for this bank account. Please create a new bank account to try again.
    /// - <c>MICRODEPOSIT_VERIFICATION_EXPIRED</c>: The microdeposit verification window for this bank account has passed. Please create a new bank account to verify it again.
    /// - <c>TOTAL_MICRODEPOSIT_ATTEMPTS_EXCEEDED_ACCOUNT_LOCKED</c>: This bank account has reached the maximum number of microdeposit verification attempts and cannot be re-verified. This account is now locked.
    /// - <c>USER_INITIATED</c>: "The payment instrument has been disabled by a user."
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disabled_message")]
    public string? DisabledMessage { get; init; }

    /// <summary>
    /// Indicates whether the <c>Payment Instrument</c> resource is enabled. The default value is <c>true</c>; set it to <c>false</c> to disable the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enabled")]
    public bool? Enabled { get; init; }

    /// <summary>
    /// Unique ID that represents the tokenized bank account data.
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
    /// Canadian bank identifier (EFT). Exactly 3 digits that identify the financial institution (e.g., 004 = TD, 002 = Scotiabank). Stored as a string to preserve leading zeros.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("institution_number")]
    [StringLength(3, MinimumLength = 3)]
    public string? InstitutionNumber { get; init; }

    /// <summary>
    /// The type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("instrument_type")]
    public InstrumentType1? InstrumentType { get; init; }

    /// <summary>
    /// The last 4 digits of the account number used to create the <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("masked_account_number")]
    public string? MaskedAccountNumber { get; init; }

    /// <summary>
    /// The ID of the microdeposit sent to verify the bank account. Only returned when microdeposit verification is required. For more information, see <see href="/guides/online-payments/bank-payments/microdeposit-verification">Microdeposit Verification</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microdeposit")]
    public string? Microdeposit { get; init; }

    /// <summary>
    /// The URL of the hosted microdeposit verification page.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("microdeposit_verification_url")]
    public string? MicrodepositVerificationUrl { get; init; }

    /// <summary>
    /// The name of the bank account. For Plaid-linked accounts, reflects the <c>name</c> passed at creation if provided; otherwise defaults to the bank account name returned by Plaid.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

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
    /// This field identifies the external service used to connect the bank account.
    /// <list type="bullet">
    ///   <item><description><c>PLAID</c> indicates that the account details are being sourced via Plaid.</description></item>
    ///   <item><description><c>PLAID_RESELLER</c> indicates that the account details are being sourced via Plaid using Finix's Reseller flow.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party")]
    public ThirdParty? ThirdParty { get; init; }

    /// <summary>
    /// A Plaid <c>processor_token</c> created with <c>processor: finix</c>. The token must have access to Plaid's <c>auth</c> and <c>identity</c> products, which can be configured when creating the <c>link_token</c>. For more information, see <see href="https://plaid.com/docs/auth/partnerships/finix/">Plaid's integration guide</see> and <see href="/guides/online-payments/bank-payments/plaid-integration">Finix's Plaid guide</see>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("third_party_token")]
    public string? ThirdPartyToken { get; init; }

    /// <summary>
    /// Canadian branch/branch-transit identifier (EFT). Exactly 5 digits that identify the branch where the account is held. Stored as a string to preserve leading zeros.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transit_number")]
    [StringLength(5, MinimumLength = 5)]
    public string? TransitNumber { get; init; }

    /// <summary>
    /// Type of <c>Payment Instrument</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public Type19? Type { get; init; }

    /// <summary>
    /// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("_links")]
    public Links18? Links { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
