using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace FlowAccount.Models;

public record ISimpleListResultOfIProductResult
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("list")]
    public IReadOnlyList<IProductResult>? List { get; init; }
}
