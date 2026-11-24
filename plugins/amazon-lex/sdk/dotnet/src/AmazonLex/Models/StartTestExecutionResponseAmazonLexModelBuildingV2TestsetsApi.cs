using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartTestExecutionResponseAmazonLexModelBuildingV2TestsetsApi
{
    /// <summary>
    /// The unique identifier of the test set execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExecutionId")]
    public string? TestExecutionId { get; init; }

    /// <summary>
    /// The creation date and time for the test set execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("creationDateTime")]
    public DateTimeOffset? CreationDateTime { get; init; }

    /// <summary>
    /// The test set Id for the test set execution.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testSetId")]
    public string? TestSetId { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("target")]
    public TestExecutionTarget? Target { get; init; }

    /// <summary>
    /// Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Amazon Lex Runtime API is used. Whereas for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiMode")]
    public ApiMode1AmazonLexModelBuildingV2TestsetsApi? ApiMode { get; init; }

    /// <summary>
    /// Indicates whether audio or text is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExecutionModality")]
    public TestExecutionModalityAmazonLexModelBuildingV2TestsetsApi? TestExecutionModality { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
