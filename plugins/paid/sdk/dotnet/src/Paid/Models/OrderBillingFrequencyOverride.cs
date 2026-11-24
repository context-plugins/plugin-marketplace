using System.Text.Json.Serialization;
using Paid.Core.Models;
using Paid.Models.Enums;

namespace Paid.Models;

public record OrderBillingFrequencyOverride
{
    [JsonPropertyName("frequency")]
    public required OrderBillingFrequencyOverrideFrequency Frequency { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("customMonths")]
    public int? CustomMonths { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
