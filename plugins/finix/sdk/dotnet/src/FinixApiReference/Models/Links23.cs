using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
/// </summary>
public record Links23
{
    /// <summary>
    /// Link to the <c>Application</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public Application? Application { get; init; }

    /// <summary>
    /// Link to the credits associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("credits")]
    public Credits? Credits { get; init; }

    /// <summary>
    /// Link to the debits associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("debits")]
    public Debits? Debits { get; init; }

    /// <summary>
    /// Link to the <c>Dispute</c> resources associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("disputes")]
    public Disputes1? Disputes { get; init; }

    /// <summary>
    /// Link to the <c>Fee</c> resources associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("fees")]
    public Fees? Fees { get; init; }

    /// <summary>
    /// Link to the settlement funding <c>Transfer</c> resources associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("funding_transfers")]
    public FundingTransfers? FundingTransfers { get; init; }

    /// <summary>
    /// Link to the <c>Identity</c> the resource was created under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public Identity3? Identity { get; init; }

    /// <summary>
    /// Link to the reversals associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("reversals")]
    public Reversals? Reversals { get; init; }

    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self5? Self { get; init; }

    /// <summary>
    /// Link to the transfers associated with the <c>Settlement</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfers")]
    public Transfers4? Transfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
