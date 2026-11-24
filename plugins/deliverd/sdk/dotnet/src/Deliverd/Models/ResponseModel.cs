using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ResponseModel
{
    [JsonPropertyName("respondent")]
    public required string Respondent { get; init; }

    [JsonPropertyName("status")]
    public required Status1DeliverdDevCollectionsApi Status { get; init; }

    [JsonPropertyName("submittedAt")]
    public required string? SubmittedAt { get; init; }

    [JsonPropertyName("answers")]
    public required IReadOnlyList<Answer> Answers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
