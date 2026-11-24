using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

/// <summary>
/// Vendor configuration response.
/// </summary>
public record VendorConfigurationResponseDto
{
    /// <summary>
    /// International payments configuration response.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("internationalPayments")]
    public IntlPmtsConfigurationResponseDto? InternationalPayments { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
