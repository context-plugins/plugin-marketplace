using System.Text.Json.Serialization;
using Paid.Core.Models;

namespace Paid.Models;

public record Address
{
    [JsonPropertyName("line1")]
    public required string Line1 { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("line2")]
    public string? Line2 { get; init; }

    [JsonPropertyName("city")]
    public required string City { get; init; }

    [JsonPropertyName("state")]
    public required string State { get; init; }

    [JsonPropertyName("zipCode")]
    public required string ZipCode { get; init; }

    [JsonPropertyName("country")]
    public required string Country { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
