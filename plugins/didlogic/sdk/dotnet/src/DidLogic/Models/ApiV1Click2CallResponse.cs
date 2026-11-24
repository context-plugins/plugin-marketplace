using System.Text.Json.Serialization;
using DidLogic.Core.Models;

namespace DidLogic.Models;

public record ApiV1Click2CallResponse
{
    /// <summary>
    /// The Click2Call call resource
    /// </summary>
    [JsonPropertyName("data")]
    public required Data Data { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
