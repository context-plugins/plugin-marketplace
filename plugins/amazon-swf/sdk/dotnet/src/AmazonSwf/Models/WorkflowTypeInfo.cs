using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record WorkflowTypeInfo
{
    [JsonPropertyName("workflowType")]
    public required WorkflowType WorkflowType { get; init; }

    /// <summary>
    /// The current status of the workflow type.
    /// </summary>
    [JsonPropertyName("status")]
    public required Status3 Status { get; init; }

    /// <summary>
    /// The description of the type registered through RegisterWorkflowType.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("description")]
    public string? Description { get; init; }

    /// <summary>
    /// The date when this type was registered.
    /// </summary>
    [JsonPropertyName("creationDate")]
    public required DateTimeOffset CreationDate { get; init; }

    /// <summary>
    /// If the type is in deprecated state, then it is set to the date when the type was deprecated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("deprecationDate")]
    public DateTimeOffset? DeprecationDate { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
