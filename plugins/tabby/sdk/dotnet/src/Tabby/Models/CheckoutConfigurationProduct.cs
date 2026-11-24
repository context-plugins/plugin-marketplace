using System.Text.Json.Serialization;
using Tabby.Core.Models;
using Tabby.Core.Validation;
using Tabby.Core.Validation.Attributes;

namespace Tabby.Models;

public record CheckoutConfigurationProduct
{
    /// <summary>
    /// UAE/Kuwait: checkout.tabby.ai, KSA: checkout.tabby.sa
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("web_url")]
    [Format(FormatKind.Uri)]
    public string? WebUrl { get; init; }

    /// <summary>
    /// UAE/Kuwait: api.tabby.ai, KSA: api.tabby.sa
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("qr_code")]
    [Format(FormatKind.Uri)]
    public string? QrCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
