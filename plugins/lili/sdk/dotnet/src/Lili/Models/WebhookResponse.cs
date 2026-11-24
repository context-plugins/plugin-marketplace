using System;
using System.Text.Json.Serialization;
using Lili.Core.Models;
using Lili.Core.Validation;
using Lili.Core.Validation.Attributes;
using Lili.Models.Enums;

namespace Lili.Models;

/// <summary>
/// Contains the information about a specific webhook
/// </summary>
public record WebhookResponse
{
    /// <summary>
    /// The unique ID of the webhook
    /// </summary>
    [JsonPropertyName("externalId")]
    public required Guid ExternalId { get; init; }

    /// <summary>
    /// The URL that will receive the webhook calls
    /// </summary>
    [JsonPropertyName("serverUrl")]
    [Format(FormatKind.Uri)]
    public required string ServerUrl { get; init; }

    /// <summary>
    /// The status of the webhook
    /// </summary>
    [JsonPropertyName("status")]
    public required Status2 Status { get; init; }

    /// <summary>
    /// The version of the webhook
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("version")]
    public VersionEnum? Version { get; init; } = VersionEnum.V10;

    /// <summary>
    /// The type of the webhook
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeEnum? Type { get; init; } = TypeEnum.All;

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
