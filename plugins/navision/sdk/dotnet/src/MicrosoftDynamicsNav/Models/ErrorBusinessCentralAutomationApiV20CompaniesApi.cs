using System.Text.Json.Serialization;
using MicrosoftDynamicsNav.Core.Models;

namespace MicrosoftDynamicsNav.Models;

public record ErrorBusinessCentralAutomationApiV20CompaniesApi
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("code")]
    public string? Code { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
