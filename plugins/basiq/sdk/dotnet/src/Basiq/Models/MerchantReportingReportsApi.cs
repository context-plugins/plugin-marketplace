using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record MerchantReportingReportsApi
{
    /// <summary>
    /// id
    /// </summary>
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    /// <summary>
    /// Merchant name
    /// </summary>
    [JsonPropertyName("businessName")]
    public required string BusinessName { get; init; }

    /// <summary>
    /// ABN
    /// </summary>
    [JsonPropertyName("ABN")]
    public required string Abn { get; init; }

    /// <summary>
    /// full merchant logo
    /// </summary>
    [JsonPropertyName("logoMaster")]
    public required string LogoMaster { get; init; }

    /// <summary>
    /// thumbnail merchant logo
    /// </summary>
    [JsonPropertyName("logoThumb")]
    public required string LogoThumb { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumber")]
    public PhoneNumberReportingReportsApi? PhoneNumber { get; init; }

    /// <summary>
    /// Merchant Website
    /// </summary>
    [JsonPropertyName("website")]
    public required string Website { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
