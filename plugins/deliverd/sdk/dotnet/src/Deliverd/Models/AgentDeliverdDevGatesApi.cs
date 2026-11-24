using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Deliverd.Core.Models;

namespace Deliverd.Models;

/// <summary>
/// Who you are, when you ask through a person's connection. Registered on first sight and bound to that person. An agent key already says who it is
/// </summary>
public record AgentDeliverdDevGatesApi
{
    /// <summary>
    /// A Deliverd agent id
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("id")]
    public Guid? Id { get; init; }

    /// <summary>
    /// openai_dot, openai_chatgpt, openai_codex, anthropic, google, custom, …
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("provider")]
    [RegularExpression("^[a-z][a-z0-9_]{1,39}$")]
    public string? Provider { get; init; }

    /// <summary>
    /// Your id on that platform
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("externalId")]
    [StringLength(200, MinimumLength = 1)]
    public string? ExternalId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    [MaxLength(120)]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
