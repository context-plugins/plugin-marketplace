using System.Collections.Generic;
using System.Text.Json.Serialization;
using Bitly.Core.Models;

namespace Bitly.Models;

public record User
{
    [JsonPropertyName("login")]
    public required string Login { get; init; }

    [JsonPropertyName("name")]
    public required string Name { get; init; }

    [JsonPropertyName("is_active")]
    public required bool IsActive { get; init; }

    [JsonPropertyName("created")]
    public required string Created { get; init; }

    [JsonPropertyName("modified")]
    public required string Modified { get; init; }

    [JsonPropertyName("is_sso_user")]
    public required bool IsSsoUser { get; init; }

    [JsonPropertyName("emails")]
    public required IReadOnlyList<Email> Emails { get; init; }

    [JsonPropertyName("is_2fa_enabled")]
    public required bool Is2FaEnabled { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("default_group_guid")]
    public string? DefaultGroupGuid { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
