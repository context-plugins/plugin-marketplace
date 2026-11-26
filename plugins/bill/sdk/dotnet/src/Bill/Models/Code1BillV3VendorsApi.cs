using System.Text.Json.Serialization;
using Bill.Core.Models;

namespace Bill.Models;

public record Code1BillV3VendorsApi
{
    /// <summary>
    /// Name
    /// </summary>
    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
