using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
/// </summary>
public record Links14
{
    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self? Self { get; init; }

    /// <summary>
    /// Link to the <c>Identity</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public IdentityLink? Identity { get; init; }

    /// <summary>
    /// Link to the <c>Verification</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verifications")]
    public Verifications? Verifications { get; init; }

    /// <summary>
    /// Link to the <c>merchant_profile</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_profile")]
    public MerchantProfiles? MerchantProfile { get; init; }

    /// <summary>
    /// Link to the <c>merchant_profile</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant_profiles")]
    public MerchantProfiles? MerchantProfiles { get; init; }

    /// <summary>
    /// Link to the <c>Verification</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("verification")]
    public Verifications? Verification { get; init; }

    /// <summary>
    /// Link to the <c>Application</c> the request was made under.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("application")]
    public ApplicationLink? Application { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
