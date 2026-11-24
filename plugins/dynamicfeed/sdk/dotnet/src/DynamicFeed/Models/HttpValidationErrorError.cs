using System.Collections.Generic;
using System.Text.Json.Serialization;
using DynamicFeed.Core.Models;

namespace DynamicFeed.Models;

public record HttpValidationErrorError
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("detail")]
    public IReadOnlyList<ValidationError>? Detail { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
