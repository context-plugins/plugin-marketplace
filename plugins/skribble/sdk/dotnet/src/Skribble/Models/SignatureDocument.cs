using System;
using System.Text.Json.Serialization;
using Skribble.Core.Models;

namespace Skribble.Models;

public record SignatureDocument
{
    /// <summary>
    /// Unique Document ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
