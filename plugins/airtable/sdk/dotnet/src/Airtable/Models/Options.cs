using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record Options
{
    /// <summary>
    /// Filters to narrow down which changes trigger the webhook.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("filters")]
    public Filters? Filters { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
