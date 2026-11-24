using System.Collections.Generic;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Models;

namespace PlinthUsGrantsData.Models;

public record AnswerRequest
{
    /// <summary>
    /// One value per question, in the order given. Compared case-insensitively; "yes"/"true" and "$1,234"/"1234" are equivalent.
    /// </summary>
    [JsonPropertyName("answers")]
    public required IReadOnlyList<string> Answers { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
