using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record StartTestExecutionRequest
{
    /// <summary>
    /// The test set Id for the test set execution.
    /// </summary>
    [JsonPropertyName("testSetId")]
    public required string TestSetId { get; init; }

    [JsonPropertyName("target")]
    public required TestExecutionTarget Target { get; init; }

    /// <summary>
    /// Indicates whether we use streaming or non-streaming APIs for the test set execution. For streaming, StartConversation Runtime API is used. Whereas, for non-streaming, RecognizeUtterance and RecognizeText Amazon Lex Runtime API are used.
    /// </summary>
    [JsonPropertyName("apiMode")]
    public required ApiMode2 ApiMode { get; init; }

    /// <summary>
    /// Indicates whether audio or text is used.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("testExecutionModality")]
    public TestExecutionModality2? TestExecutionModality { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
