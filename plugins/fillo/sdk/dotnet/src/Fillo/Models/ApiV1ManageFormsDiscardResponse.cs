using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsDiscardResponse
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("changed")]
    public required bool Changed { get; init; }

    /// <summary>
    /// The live FormSchema that remains.
    /// </summary>
    [JsonPropertyName("schema")]
    public required object Schema { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
