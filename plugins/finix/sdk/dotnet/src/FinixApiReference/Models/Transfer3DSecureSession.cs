using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;
using FinixApiReference.Models.Enums;

namespace FinixApiReference.Models;

public record Transfer3DSecureSession
{
    /// <summary>
    /// The ID of the <c>3D Secure Session</c> used for the buyer's authentication flow. It must correspond to <c>source</c> and must not already have been used by another transaction. For the redirect flow, wait for <c>state: SUCCEEDED</c>; with Finix.js, submit after the <c>succeeded</c> callback even if the resource still reads <c>PENDING</c>.
    /// <para>
    /// This field is mutually exclusive with <c>3d_secure_authentication</c>. Pass <c>3d_secure_session</c> when Finix runs the authentication, and <c>3d_secure_authentication</c> when you authenticate the buyer with your own 3D Secure vendor.
    /// </para>
    /// </summary>
    [JsonPropertyName("3d_secure_session")]
    public required string DSecureSession3 { get; init; }

    /// <summary>
    /// The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    /// </summary>
    [JsonPropertyName("amount")]
    public required long Amount { get; init; }

    /// <summary>
    /// ISO 4217 3-letter currency code.
    /// </summary>
    [JsonPropertyName("currency")]
    public required Currency Currency { get; init; }

    /// <summary>
    /// The ID of the <see href="/api/merchants">Merchant</see> under which to create the <see href="/api/transfers">Transfer</see>. This must match the <c>merchant_id</c> of the <c>3D Secure Session</c>.
    /// </summary>
    [JsonPropertyName("merchant")]
    public required string Merchant { get; init; }

    /// <summary>
    /// ID of the <c>Payment Instrument</c> where funds get debited.
    /// </summary>
    [JsonPropertyName("source")]
    public required string Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
