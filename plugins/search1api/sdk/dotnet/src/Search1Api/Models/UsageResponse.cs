using System.Text.Json.Serialization;
using Search1Api.Core.Models;
using Search1Api.Core.Validation.Attributes;
using Search1Api.Models.Enums;

namespace Search1Api.Models;

public record UsageResponse
{
    [JsonPropertyName("usage")]
    [Minimum(0)]
    public required int Usage { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("user_id")]
    public string? UserId { get; init; }

    [JsonPropertyName("credential_type")]
    public required CredentialType CredentialType { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("client_id")]
    public string? ClientId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
