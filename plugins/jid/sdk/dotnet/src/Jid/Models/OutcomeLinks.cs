using System.Text.Json.Serialization;
using Jid.Core.Models;

namespace Jid.Models;

/// <summary>
/// Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a login.
/// </summary>
public record OutcomeLinks
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("legit")]
    public string? Legit { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sales_pitch")]
    public string? SalesPitch { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spam")]
    public string? Spam { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("scam")]
    public string? Scam { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("closed")]
    public string? Closed { get; init; }

    /// <summary>
    /// 2026-10-05 button, still accepted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("good")]
    public string? Good { get; init; }

    /// <summary>
    /// 2026-10-05 button, still accepted
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("junk")]
    public string? Junk { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
