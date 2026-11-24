using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using DoiT.Core.Models;
using DoiT.Models.Enums;

namespace DoiT.Models;

public record GcpBillingAccountServiceSettings
{
    /// <summary>
    /// Product line these settings apply to.
    /// </summary>
    [JsonPropertyName("service")]
    public required Service5 Service { get; init; }

    /// <summary>
    /// Region scope these settings apply to, in <c>lower_snake_case</c> wire form (for example <c>us_east1</c>). Always <c>global</c> for <c>compute</c>; always a concrete region (never <c>global</c>) for <c>cloud_sql</c>.
    /// </summary>
    [JsonPropertyName("region")]
    [RegularExpression("^(global|[a-z]+(_[a-z0-9]+)+)$")]
    public required string Region { get; init; }

    /// <summary>
    /// Commitment settings for this product line and region.
    /// </summary>
    [JsonPropertyName("settings")]
    public required GcpBillingAccountSettings Settings { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
