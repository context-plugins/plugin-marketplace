using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record Links13
{
    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self? Self { get; init; }

    /// <summary>
    /// Link to the <c>Verification</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifications")]
    public Verifications? Verifications { get; init; }

    /// <summary>
    /// Link to the <c>Merchant</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchants")]
    public Merchants? Merchants { get; init; }

    /// <summary>
    /// Link to the <c>Settlement</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("settlements")]
    public Settlements? Settlements { get; init; }

    /// <summary>
    /// Link to the <c>Authorization</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizations")]
    public Authorizations? Authorizations { get; init; }

    /// <summary>
    /// Link to the <c>Transfer</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfers")]
    public Transfers? Transfers { get; init; }

    /// <summary>
    /// Link to the <c>Payment Instrume</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("payment_instruments")]
    public PaymentInstruments? PaymentInstruments { get; init; }

    /// <summary>
    /// Link to any other <c>Identites</c> associated with the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("associated_identities")]
    public AssociatedIdentities? AssociatedIdentities { get; init; }

    /// <summary>
    /// Link to the <c>Dispute</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disputes")]
    public Disputes? Disputes { get; init; }

    /// <summary>
    /// Link to the <c>Application</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public ApplicationLink? Application { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
