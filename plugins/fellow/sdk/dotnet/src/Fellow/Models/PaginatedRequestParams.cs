using System.Text.Json.Serialization;
using Fellow.Core.Models;
using Fellow.Core.Validation.Attributes;

namespace Fellow.Models;

/// <summary>
/// Parameters sent in a request to paginate a queryset.
/// </summary>
public record PaginatedRequestParams
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("cursor")]
    public string? Cursor { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page_size")]
    [Maximum(50)]
    [ExclusiveMinimum(0)]
    public int? PageSize { get; init; } = 20;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
