using System.Text.Json.Serialization;
using Divvy.Core.Models;
using Divvy.Models.Enums;

namespace Divvy.Models;

/// <summary>
/// Account request Dto.
/// </summary>
public record CreateAccountRequest
{
    [JsonPropertyName("type")]
    public required ChartOfAccountsTypeRequest Type { get; init; }

    /// <summary>
    /// Number
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("number")]
    public string? Number { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
