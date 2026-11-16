using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record Links24
{
    /// <summary>
    /// Link to the <c>Application</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public ApplicationLink? Application { get; init; }

    /// <summary>
    /// Link to the <c>Payment Instrument</c> where funds are getting sent.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("destination")]
    public Destination? Destination { get; init; }

    /// <summary>
    /// Link to the <c>Device</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device2? Device { get; init; }

    /// <summary>
    /// Link to the <c>Dispute</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disputes")]
    public Disputes2? Disputes { get; init; }

    /// <summary>
    /// Link to the <c>fee_profile</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fee_profile")]
    public FeeProfile1? FeeProfile { get; init; }

    /// <summary>
    /// Link to the <c>fees</c> the request is associated with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fees")]
    public Fees1? Fees { get; init; }

    /// <summary>
    /// Link to the <c>Identity</c> the <c>Merchant</c> was created under and the <c>Transfer</c> was submitted with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_identity")]
    public MerchantIdentity? MerchantIdentity { get; init; }

    /// <summary>
    /// Link to the <c>Payment Instrument</c> associated with the Transfer.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instruments")]
    public PaymentInstruments1? PaymentInstruments { get; init; }

    /// <summary>
    /// Link to the <c>Transfer</c> the <c>Dispute</c> is about.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disputed_transfer")]
    public DisputedTransfer? DisputedTransfer { get; init; }

    /// <summary>
    /// Link to the original resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("parent")]
    public Parent? Parent { get; init; }

    /// <summary>
    /// Link to the <c>reversals</c> associated with the <c>Transfer</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reversals")]
    public Reversals1? Reversals { get; init; }

    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self? Self { get; init; }

    /// <summary>
    /// Link to the <c>Payment Instrument</c> the <c>Transfer</c> was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("source")]
    public Source? Source { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
