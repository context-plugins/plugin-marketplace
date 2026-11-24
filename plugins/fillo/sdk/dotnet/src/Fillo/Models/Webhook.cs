using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using Fillo.Core.Models;
using Fillo.Core.Validation;
using Fillo.Core.Validation.Attributes;
using Fillo.Models.Enums;

namespace Fillo.Models;

public record Webhook
{
    [JsonPropertyName("id")]
    public required string Id { get; init; }

    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Delivered event types, e.g. response.created and optionally draft.abandoned.
    /// </summary>
    [JsonPropertyName("events")]
    public required IReadOnlyList<string> Events { get; init; }

    /// <summary>
    /// Configured receiver-authentication mode. The credential is never returned.
    /// </summary>
    [JsonPropertyName("authentication")]
    public required Authentication1 Authentication { get; init; }

    [JsonPropertyName("createdAt")]
    public required DateTimeOffset CreatedAt { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
