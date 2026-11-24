using System.Text.Json.Serialization;
using Airtable.Core.Models;

namespace Airtable.Models;

public record FormPageSubmission
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pageId")]
    public string? PageId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
