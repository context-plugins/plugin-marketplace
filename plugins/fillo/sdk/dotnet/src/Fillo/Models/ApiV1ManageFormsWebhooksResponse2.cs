using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsWebhooksResponse2
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("deleted")]
    public required bool Deleted { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
