using System;
using System.Text.Json.Serialization;
using AlphaAi.Core.Models;
using AlphaAi.Core.Validation;
using AlphaAi.Core.Validation.Attributes;

namespace AlphaAi.Models;

public record ClusterFiling
{
    [JsonPropertyName("accession_number")]
    public required string AccessionNumber { get; init; }

    [JsonPropertyName("filed_at")]
    public required DateTimeOffset FiledAt { get; init; }

    /// <summary>
    /// The filing's EDGAR index page.
    /// </summary>
    [JsonPropertyName("sec_url")]
    [Format(FormatKind.Uri)]
    public required string SecUrl { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
