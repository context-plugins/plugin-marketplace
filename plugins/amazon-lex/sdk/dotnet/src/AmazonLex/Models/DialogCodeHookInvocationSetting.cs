using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DialogCodeHookInvocationSetting
{
    /// <summary>
    /// Indicates whether a Lambda function should be invoked for the dialog.
    /// </summary>
    [JsonPropertyName("enableCodeHookInvocation")]
    public required bool EnableCodeHookInvocation { get; init; }

    /// <summary>
    /// Determines whether a dialog code hook is used when the intent is activated.
    /// </summary>
    [JsonPropertyName("active")]
    public required bool Active { get; init; }

    /// <summary>
    /// A label that indicates the dialog step from which the dialog code hook is happening.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("invocationLabel")]
    public string? InvocationLabel { get; init; }

    [JsonPropertyName("postCodeHookSpecification")]
    public required PostDialogCodeHookInvocationSpecification PostCodeHookSpecification { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
