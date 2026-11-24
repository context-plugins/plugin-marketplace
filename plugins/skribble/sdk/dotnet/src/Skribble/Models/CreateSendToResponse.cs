using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;
using Skribble.Core.Validation;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Models;

public record CreateSendToResponse
{
    /// <summary>
    /// URL to claim document to get signed.
    /// </summary>
    [JsonPropertyName("url")]
    [Format(FormatKind.Uri)]
    public required string Url { get; init; }

    /// <summary>
    /// Generated send-to document ID
    /// </summary>
    [JsonPropertyName("id")]
    public required Guid Id { get; init; }

    /// <summary>
    /// Access code to be used in for endpoints.
    /// </summary>
    [JsonPropertyName("access_code")]
    public required Guid AccessCode { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
