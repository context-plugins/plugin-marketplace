using System.Collections.Generic;
using System.Text.Json.Serialization;
using Rendex.Core.Models;
using Rendex.Core.Validation;
using Rendex.Core.Validation.Attributes;
using Rendex.Models.Enums;

namespace Rendex.Models;

public record V1ExtractRequest
{
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("extractFormat")]
    public ExtractFormat1? ExtractFormat { get; init; } = ExtractFormat1.Markdown;

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("waitUntil")]
    public WaitUntil1? WaitUntil { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeout")]
    public int? Timeout { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("device")]
    public Device1? Device { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("blockCookieBanners")]
    public bool? BlockCookieBanners { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("hideSelectors")]
    public IReadOnlyList<string>? HideSelectors { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
