using System.Text.Json.Serialization;
using Fellow.Core.Models;

namespace Fellow.Models;

/// <summary>
/// Information about a page returned in a paginated response.
/// </summary>
public record PageInfo
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    public string? Cursor { get; init; }

    [JsonPropertyName("page_size")]
    public required int PageSize { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
