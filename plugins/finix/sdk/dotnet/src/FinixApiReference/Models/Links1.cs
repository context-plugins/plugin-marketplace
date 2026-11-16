using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record Links1
{
    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self? Self { get; init; }

    /// <summary>
    /// Link to the <c>Application</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public ApplicationLink? Application { get; init; }

    /// <summary>
    /// Link to the <c>Device</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device2? Device { get; init; }

    /// <summary>
    /// Link to the <c>Identity</c> the <c>Merchant</c> was created under and the <c>Transfer</c> was submitted with.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_identity")]
    public MerchantIdentity? MerchantIdentity { get; init; }

    /// <summary>
    /// Link to the <c>Transfer</c> created when the <c>Authorization</c> moves to <b>SUCCEEDED</b>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfer")]
    public Transfer4? Transfer { get; init; }

    /// <summary>
    /// Link to the <c>Transfer</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfers")]
    public Transfers? Transfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
