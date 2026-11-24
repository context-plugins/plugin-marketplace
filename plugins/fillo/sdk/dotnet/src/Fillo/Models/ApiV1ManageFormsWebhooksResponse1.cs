using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageFormsWebhooksResponse1
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("events")]
    public required IReadOnlyList<string> Events { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
