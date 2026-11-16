using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
/// </summary>
public record Links5
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("authorizations")]
    public Authorizations4? Authorizations { get; init; }

    /// <summary>
    /// Link to the <c>Merhcant</c> resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public Merchant? Merchant { get; init; }

    /// <summary>
    /// Link to the resource that was used in the request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self5? Self { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfers")]
    public Transfers1? Transfers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
