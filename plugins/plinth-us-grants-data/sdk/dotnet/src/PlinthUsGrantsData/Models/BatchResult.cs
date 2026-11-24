using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;
using PlinthUsGrantsData.Models.AnyOf;

namespace PlinthUsGrantsData.Models;

public record BatchResult
{
    /// <summary>
    /// Index of the request row this answers. Results are in request order, but a client should key on this rather than on position.
    /// </summary>
    [JsonPropertyName("i")]
    public required int I { get; init; }

    /// <summary>
    /// The EIN the row resolved to, when it did.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("ein")]
    public Ein? Ein { get; init; }

    /// <summary>
    /// The organization's name, when the row resolved.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public Name? Name { get; init; }

    [JsonPropertyName("field")]
    public required string Field { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("year")]
    public Year? Year { get; init; }

    /// <summary>
    /// The answer. Null whenever <c>status</c> is not <c>ok</c>, and sometimes when it is (a filer with no revenue line).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("value")]
    public object? Value { get; init; }

    /// <summary>
    /// ok · not_found · unresolved · ambiguous · upgrade · capped · unknown_field · invalid · error. Anything but <c>ok</c> has a <c>note</c>.
    /// </summary>
    [JsonPropertyName("status")]
    public required string Status { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("note")]
    public Note? Note { get; init; }

    /// <summary>
    /// On <c>ambiguous</c>: the organizations the name matched, each with ein, name and state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("candidates")]
    public Candidates? Candidates { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
