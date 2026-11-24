using System.Text.Json.Serialization;
using DidLogic.Core.Models;
using DidLogic.Models.Enums;

namespace DidLogic.Models;

public record Log
{
    /// <summary>
    /// Log identifier
    /// </summary>
    [JsonPropertyName("id")]
    public required int Id { get; init; }

    /// <summary>
    /// Phone number that was checked
    /// </summary>
    [JsonPropertyName("number")]
    public required string Number { get; init; }

    /// <summary>
    /// Lookup status
    /// </summary>
    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    /// <summary>
    /// Line type (e.g. mobile, fixed)
    /// </summary>
    [JsonPropertyName("phone_type")]
    public required string PhoneType { get; init; }

    /// <summary>
    /// Carrier / operator name
    /// </summary>
    [JsonPropertyName("carrier")]
    public required string Carrier { get; init; }

    /// <summary>
    /// Mobile Country Code
    /// </summary>
    [JsonPropertyName("mcc")]
    public required string Mcc { get; init; }

    /// <summary>
    /// Mobile Network Code
    /// </summary>
    [JsonPropertyName("mnc")]
    public required string Mnc { get; init; }

    /// <summary>
    /// Whether the number was ported
    /// </summary>
    [JsonPropertyName("ported")]
    public required bool Ported { get; init; }

    /// <summary>
    /// Whether the destination is flagged risky
    /// </summary>
    [JsonPropertyName("risky")]
    public required bool Risky { get; init; }

    /// <summary>
    /// Country
    /// </summary>
    [JsonPropertyName("country")]
    public required string Country { get; init; }

    /// <summary>
    /// Parent task identifier
    /// </summary>
    [JsonPropertyName("task_id")]
    public required int TaskId { get; init; }

    /// <summary>
    /// Processing completion timestamp
    /// </summary>
    [JsonPropertyName("processed_at")]
    public required string ProcessedAt { get; init; }

    /// <summary>
    /// Log creation timestamp
    /// </summary>
    [JsonPropertyName("created_at")]
    public required string CreatedAt { get; init; }

    /// <summary>
    /// Whether the number is valid
    /// </summary>
    [JsonPropertyName("valid")]
    public required bool Valid { get; init; }

    /// <summary>
    /// Client price charged for this lookup (USD)
    /// </summary>
    [JsonPropertyName("price")]
    public required string Price { get; init; }

    /// <summary>
    /// Normalized lookup error code: 000 — OK, 113 — Internal service error, 121 — Invalid phone number length or format, 199 — Unexpected error. null when no result is available yet.
    /// </summary>
    [JsonPropertyName("error_code")]
    public required ErrorCode? ErrorCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
