using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record DSecureSession3
{
    /// <summary>
    /// The ID of the <c>3D Secure Session</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
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
    /// The authentication values the card network returns. Pass this object, or the ID of this <c>3D Secure Session</c>, when you create the <see href="/api/transfers">Transfer</see> or <see href="/api/authorizations">Authorization</see>.
    /// <para>
    /// This field is <c>null</c> until the authentication process finishes. It stays <c>null</c> when <c>state</c> is <c>FAILED</c>.
    /// </para>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_authentication")]
    public DSecureAuthentication23? DSecureAuthentication3 { get; init; }

    /// <summary>
    /// The ID of the authentication session with the 3D Secure vendor. This is not the ID of the <c>3D Secure Session</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_authentication_session_id")]
    public string? DSecureAuthenticationSessionId3 { get; init; }

    /// <summary>
    /// The hosted URL where the <see href="/api/identities">buyer</see> completes authentication. Redirect the buyer to this URL to run the redirect flow. This field is <c>null</c> when you create the session from a <c>token_id</c> and complete the authentication with Finix.js.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_authentication_url")]
    public string? DSecureAuthenticationUrl3 { get; init; }

    /// <summary>
    /// The version of the 3D Secure protocol used for the authentication.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("3d_secure_version")]
    public string? DSecureVersion3 { get; init; }

    /// <summary>
    /// The amount that was authenticated, in the smallest unit of the currency (for example, <c>1000</c> = $10.00).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("amount")]
    public long? Amount { get; init; }

    /// <summary>
    /// How the buyer was authenticated. This field is populated when <c>state</c> is <c>SUCCEEDED</c>.
    /// <list type="bullet">
    ///   <item><description><c>FRICTIONLESS</c>: The issuer authenticated the buyer from the data in the request, without presenting a challenge.</description></item>
    ///   <item><description><c>CHALLENGE</c>: The issuer presented the buyer with a challenge, such as a one-time passcode.</description></item>
    ///   <item><description><c>ATTEMPT</c>: The card network authenticated on the issuer's behalf.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authentication_type")]
    public AuthenticationType? AuthenticationType { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("currency")]
    public Currency? Currency { get; init; }

    /// <summary>
    /// The code for why the authentication process could not finish. This field is populated when <c>state</c> is <c>FAILED</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_code")]
    public FailureCode? FailureCode { get; init; }

    /// <summary>
    /// A human-readable description of why the authentication process could not finish.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure_message")]
    public string? FailureMessage { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/merchants">Merchant</see> the payment processes under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_id")]
    public string? MerchantId { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/payment-instruments">Payment Instrument</see> that was authenticated. This field is <c>null</c> when you create the session from a <c>token_id</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instrument_id")]
    public string? PaymentInstrumentId { get; init; }

    /// <summary>
    /// The URL the buyer returns to after they finish authentication. This field is <c>null</c> when you create the session from a <c>token_id</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("redirect_url")]
    public string? RedirectUrl { get; init; }

    /// <summary>
    /// The state of the authentication process. A <c>state</c> of <c>SUCCEEDED</c> means the process finished. It does not mean the buyer was authenticated: a session where the issuer declined to authenticate the buyer also ends in <c>SUCCEEDED</c>. Read <c>3d_secure_authentication.electronic_commerce_indicator</c> for the authentication result.
    /// <list type="bullet">
    ///   <item><description><c>PENDING</c>: The authentication process has not finished.</description></item>
    ///   <item><description><c>SUCCEEDED</c>: The authentication process finished and returned a result.</description></item>
    ///   <item><description><c>FAILED</c>: The authentication process could not finish. See <c>failure_code</c> and <c>failure_message</c>.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State? State { get; init; }

    /// <summary>
    /// Include up to 50 <c>key: value</c> pairs to annotate requests with custom metadata.
    /// - Maximum character length for individual <c>keys</c> is 40.
    /// - Maximum character length for individual <c>values</c> is 500.
    /// (For example, <c>order_number: 25</c>, <c>item_type: produce</c>, <c>department: sales</c>)
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("tags")]
    public object? Tags { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
