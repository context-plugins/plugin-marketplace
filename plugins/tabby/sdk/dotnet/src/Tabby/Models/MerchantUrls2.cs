using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

public record MerchantUrls2
{
    /// <summary>
    /// URL where to redirect after payment is Authorized. 'Thank you' page recommended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("success")]
    [Format(FormatKind.Uri)]
    public string? Success { get; init; }

    /// <summary>
    /// URL where to proceed after cancel payment status. Checkout page recommended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cancel")]
    [Format(FormatKind.Uri)]
    public string? Cancel { get; init; }

    /// <summary>
    /// URL where to proceed after failure payment status (Rejected). Checkout page recommended.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("failure")]
    [Format(FormatKind.Uri)]
    public string? Failure { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
