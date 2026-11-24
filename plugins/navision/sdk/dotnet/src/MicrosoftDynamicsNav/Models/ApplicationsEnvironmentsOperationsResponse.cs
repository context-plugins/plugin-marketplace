using System.Collections.Generic;
using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record ApplicationsEnvironmentsOperationsResponse
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public IReadOnlyList<EnvironmentOperation>? Value { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
