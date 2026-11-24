using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record Target
{
    [JsonPropertyName("aiSystemId")]
    public required Guid AiSystemId { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("approvedClassification")]
    public required string? ApprovedClassification { get; init; }

    [JsonPropertyName("personalData")]
    public required bool PersonalData { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
