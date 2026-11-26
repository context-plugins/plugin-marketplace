using System.Collections.Generic;
using System.Text.Json.Serialization;
using Dynamics365BusinessCentral.Core.Models;

namespace Dynamics365BusinessCentral.Models;

public record CompaniesApiItemCategoriesResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public IReadOnlyList<ItemCategory>? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
