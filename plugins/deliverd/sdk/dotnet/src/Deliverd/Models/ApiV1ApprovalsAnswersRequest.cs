using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1ApprovalsAnswersRequest
{
    [JsonPropertyName("questionId")]
    public required Guid QuestionId { get; init; }

    [JsonPropertyName("answer")]
    [StringLength(4000, MinimumLength = 1)]
    public required string Answer { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
