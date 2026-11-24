using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ApiV1TasksGovernanceReassessmentsRequest
{
    /// <summary>
    /// Why the task needs reassessing
    /// </summary>
    [JsonPropertyName("reason")]
    [StringLength(2000, MinimumLength = 1)]
    public required string Reason { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
