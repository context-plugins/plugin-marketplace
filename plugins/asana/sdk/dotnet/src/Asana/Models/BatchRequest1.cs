using System.Text.Json.Serialization;
using Asana.Core.Models;

namespace Asana.Models;

public record BatchRequest1
{
    /// <summary>
    /// A request object for use in a batch request.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("data")]
    public BatchRequest? Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
