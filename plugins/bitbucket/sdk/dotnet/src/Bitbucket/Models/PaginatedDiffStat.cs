using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Bitbucket.Core.Validation;
using Bitbucket.Core.Validation.Attributes;

namespace Bitbucket.Models;

/// <summary>
/// A paginated list of diffstats.
/// </summary>
public record PaginatedDiffStat
{
    /// <summary>
    /// Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("size")]
    [Minimum(0)]
    public int? Size { get; init; }

    /// <summary>
    /// Page number of the current results. This is an optional element that is not provided in all responses.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("page")]
    [Minimum(1)]
    public int? Page { get; init; }

    /// <summary>
    /// Current number of objects on the existing page. The default value is 500 with 5000 being the maximum allowed value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("pagelen")]
    [Minimum(1)]
    public int? Pagelen { get; init; }

    /// <summary>
    /// Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("next")]
    [Format(FormatKind.Uri)]
    public string? Next { get; init; }

    /// <summary>
    /// Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("previous")]
    [Format(FormatKind.Uri)]
    public string? Previous { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("values")]
    [MinLength(0)]
    [UniqueItems]
    public IReadOnlyList<DiffStat>? Values { get; init; }
}
