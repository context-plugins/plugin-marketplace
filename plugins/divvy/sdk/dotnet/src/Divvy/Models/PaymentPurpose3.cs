using System.Text.Json.Serialization;
using Divvy.Core.Models;

namespace Divvy.Models;

public record PaymentPurpose3
{
    /// <summary>
    /// Payment purpose text
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("text")]
    public string? Text { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public CodeBillV3VendorsApi? Code { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
