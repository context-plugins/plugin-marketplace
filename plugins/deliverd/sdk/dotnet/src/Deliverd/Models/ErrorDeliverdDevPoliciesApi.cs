using System.Collections.Generic;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

public record ErrorDeliverdDevPoliciesApi
{
    [JsonPropertyName("code")]
    public string Code { get; } = "invalid_rules";

    [JsonPropertyName("message")]
    public required string Message { get; init; }

    /// <summary>
    /// One line per problem
    /// </summary>
    [JsonPropertyName("details")]
    public required IReadOnlyList<string> Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
