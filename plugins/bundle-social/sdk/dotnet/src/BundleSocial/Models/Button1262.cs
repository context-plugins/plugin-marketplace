using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using BundleSocial.Core.Models;

namespace BundleSocial.Models;

public record Button1262
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    [StringLength(36, MinimumLength = 1)]
    public string? Id { get; init; }

    [JsonPropertyName("type")]
    public string Type { get; } = "PHONE";

    [JsonPropertyName("label")]
    [StringLength(20, MinimumLength = 1)]
    public required string Label { get; init; }

    [JsonPropertyName("phoneNumber")]
    [StringLength(30, MinimumLength = 3)]
    public required string PhoneNumber { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
