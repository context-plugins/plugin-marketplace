using System.Text.Json.Serialization;
using Basiq.Core.Models;

namespace Basiq.Models;

public record PaymentDetails
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("bpay")]
    public Bpay? Bpay { get; init; }

    /// <summary>
    /// 6 Digit APCA number for the initiating institution. The field is fixed-width and padded with leading zeros if applicable.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apcaNumber")]
    public string? ApcaNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
