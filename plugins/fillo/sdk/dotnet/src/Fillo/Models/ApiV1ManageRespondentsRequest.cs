using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Fillo.Core.Models;

namespace Fillo.Models;

public record ApiV1ManageRespondentsRequest
{
    /// <summary>
    /// The respondent's exact external id.
    /// </summary>
    [JsonPropertyName("confirm")]
    [StringLength(256, MinimumLength = 1)]
    public required string Confirm { get; init; }

    /// <summary>
    /// Also erase every response they submitted, with its files.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("alsoResponses")]
    public bool? AlsoResponses { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
