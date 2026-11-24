using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record MigrationAlert
{
    /// <summary>
    /// The type of alert. There are two kinds of alerts: ERROR - There was an issue with the migration that can't be resolved. The migration stops. WARN - There was an issue with the migration that requires manual changes to the new Amazon Lex V2 bot. The migration continues.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("type")]
    public TypeAmazonLexModelBuildingV2MigrationsApi? Type { get; init; }

    /// <summary>
    /// A message that describes why the alert was issued.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("message")]
    public string? Message { get; init; }

    /// <summary>
    /// Additional details about the alert.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public IReadOnlyList<string>? Details { get; init; }

    /// <summary>
    /// A link to the Amazon Lex documentation that describes how to resolve the alert.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("referenceURLs")]
    public IReadOnlyList<string>? ReferenceUrLs { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
