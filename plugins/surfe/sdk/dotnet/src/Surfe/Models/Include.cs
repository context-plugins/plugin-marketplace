using System.Text.Json.Serialization;
using Surfe.Core.Models;

namespace Surfe.Models;

public record Include
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("firmographics")]
    public bool? Firmographics { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("phoneNumbers")]
    public bool? PhoneNumbers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
