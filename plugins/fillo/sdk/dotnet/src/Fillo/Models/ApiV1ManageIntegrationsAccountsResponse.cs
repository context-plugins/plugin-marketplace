using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record ApiV1ManageIntegrationsAccountsResponse
{
    [JsonPropertyName("removed")]
    public string Removed { get; } = "True";

    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("provider")]
    public required Provider1 Provider { get; init; }

    [JsonPropertyName("label")]
    public required string Label { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
