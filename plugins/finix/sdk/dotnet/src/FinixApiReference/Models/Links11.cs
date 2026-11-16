using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

/// <summary>
/// For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these <c>_links</c> to make your follow-up requests and quickly access relevant IDs.
/// </summary>
public record Links11
{
    /// <summary>
    /// The path to the <c>Fee</c> resource.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("self")]
    public Self9? Self { get; init; }

    /// <summary>
    /// A link to the <c>Merchant</c> that the fee was debited from.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("merchant")]
    public Merchant1? Merchant { get; init; }

    /// <summary>
    /// A link to the <c>Transfer</c> that generated the <c>Fee</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("transfer")]
    public Transfer2? Transfer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
