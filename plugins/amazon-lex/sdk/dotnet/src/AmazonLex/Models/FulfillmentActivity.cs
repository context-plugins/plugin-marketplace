using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record FulfillmentActivity
{
    /// <summary>
    /// How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application.
    /// </summary>
    [JsonPropertyName("type")]
    public required TypeAmazonLexModelBuildingV2VersionsApi Type { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("codeHook")]
    public CodeHook? CodeHook { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
