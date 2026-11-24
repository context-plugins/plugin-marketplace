using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record CompanySingleResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public CompanySingleResponseData? Data { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errors")]
    public CompanyErrorResponse? Errors { get; init; }

    /// <summary>
    /// Currently returns an empty value; this field should be deprecated in future releases.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("meta")]
    public object? Meta { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
