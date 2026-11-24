using System.Collections.Generic;
using System.Text.Json.Serialization;
using Lusha.Core.Models;

namespace Lusha.Models;

public record Result1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public string? Id { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("companyChange")]
    public IReadOnlyList<object>? CompanyChange { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("promotion")]
    public IReadOnlyList<object>? Promotion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
