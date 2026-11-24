using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Member1
{
    /// <summary>
    /// The ID of the member user.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public string? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
