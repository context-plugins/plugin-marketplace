using System.Text.Json.Serialization;
using FinixApiReference.Core.Models;

namespace FinixApiReference.Models;

public record EnablePartialAuthorizations
{
    /// <summary>
    /// <list type="bullet">
    ///   <item><description>Set to <b>true</b> if you want to enable partial authorizations for a specific <c>Merchant</c>.</description></item>
    ///   <item><description>Partial authorizations enable the <c>Merchant</c> to collect a portion of the amount if the cardholder doesn't have the funds to cover the entire amount on their card.</description></item>
    /// </list>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_partial_authorization_enabled")]
    public bool? DefaultPartialAuthorizationEnabled { get; init; }

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
