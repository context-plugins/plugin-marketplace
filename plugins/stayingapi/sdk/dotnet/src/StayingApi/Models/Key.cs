using System.Text.Json.Serialization;
using StayingApi.Core.Models;
using StayingApi.Models.Enums;

namespace StayingApi.Models;

public record Key
{
    /// <summary>
    /// Key environment: live or sandbox (stay_test_).
    /// </summary>
    [JsonPropertyName("env")]
    public required Env Env { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
