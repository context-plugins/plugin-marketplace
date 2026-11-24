using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;
using Deliverd.Core.Validation;
using Deliverd.Core.Validation.Attributes;
using Deliverd.Models.Enums;

namespace Deliverd.Models;

public record ApiV1TasksRequest1
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("title")]
    [StringLength(200, MinimumLength = 1)]
    public string? Title { get; init; }

    /// <summary>
    /// Refused to an agent: only a person changes what the work is for. Record the change you propose as a finding
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("objective")]
    [StringLength(4000, MinimumLength = 1)]
    public string? Objective { get; init; }

    /// <summary>
    /// open, in_progress, blocked or awaiting_approval. Finishing has its own call
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("status")]
    public Status5? Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sessionUrl")]
    [MaxLength(2000)]
    [Format(FormatKind.Uri)]
    public string? SessionUrl { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("state")]
    public State5? State { get; init; }

    /// <summary>
    /// The version you read; the update is refused if somebody wrote in between
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("expectedVersion")]
    [ExclusiveMinimum(0)]
    public int? ExpectedVersion { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
