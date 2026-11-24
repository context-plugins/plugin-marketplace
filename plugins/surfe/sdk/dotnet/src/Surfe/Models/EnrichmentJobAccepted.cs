using System;
using System.Text.Json.Serialization;
using Surfe.Core.Models;
using Surfe.Core.Validation;
using Surfe.Core.Validation.Attributes;

namespace Surfe.Models;

public record EnrichmentJobAccepted
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enrichmentID")]
    public Guid? EnrichmentId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("enrichmentCallbackURL")]
    [Format(FormatKind.Uri)]
    public string? EnrichmentCallbackUrl { get; init; }

    /// <summary>
    /// Estimated completion time.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
