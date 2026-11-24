using System.Text.Json.Serialization;
using CommonElements.Core.Models;

namespace CommonElements.Models;

public record ApiV1DeliveriesResponse3
{
    [JsonPropertyName("ok")]
    public string Ok { get; } = "True";

    /// <summary>
    /// Response payload. See the example on this operation for the exact shape.
    /// </summary>
    [JsonPropertyName("data")]
    public required object Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
