using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Models;

namespace AwsStepFunctions.Models;

public record InspectionData
{
    /// <summary>
    /// The raw state input.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("input")]
    public string? Input { get; init; }

    /// <summary>
    /// The input after Step Functions applies an Arguments filter. This event will only be present when QueryLanguage for the state machine or individual states is set to JSONata. For more info, see Transforming data with Step Functions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterArguments")]
    public string? AfterArguments { get; init; }

    /// <summary>
    /// The input after Step Functions applies the InputPath filter. Not populated when QueryLanguage is JSONata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterInputPath")]
    public string? AfterInputPath { get; init; }

    /// <summary>
    /// The effective input after Step Functions applies the Parameters filter. Not populated when QueryLanguage is JSONata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterParameters")]
    public string? AfterParameters { get; init; }

    /// <summary>
    /// The state's raw result.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public string? Result { get; init; }

    /// <summary>
    /// The effective result after Step Functions applies the ResultSelector filter. Not populated when QueryLanguage is JSONata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterResultSelector")]
    public string? AfterResultSelector { get; init; }

    /// <summary>
    /// The effective result combined with the raw state input after Step Functions applies the ResultPath filter. Not populated when QueryLanguage is JSONata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterResultPath")]
    public string? AfterResultPath { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("request")]
    public InspectionDataRequest? Request { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("response")]
    public InspectionDataResponse? Response { get; init; }

    /// <summary>
    /// JSON string that contains the set of workflow variables after execution of the state. The set will include variables assigned in the state and variables set up as test state input.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("variables")]
    public string? Variables { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("errorDetails")]
    public InspectionErrorDetails? ErrorDetails { get; init; }

    /// <summary>
    /// The effective input after the ItemsPath filter is applied. Not populated when the QueryLanguage is JSONata.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterItemsPath")]
    public string? AfterItemsPath { get; init; }

    /// <summary>
    /// An array containing the inputs for each Map iteration, transformed by the ItemSelector specified in a Map state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterItemSelector")]
    public string? AfterItemSelector { get; init; }

    /// <summary>
    /// The effective input after the ItemBatcher filter is applied in a Map state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterItemBatcher")]
    public string? AfterItemBatcher { get; init; }

    /// <summary>
    /// The effective input after the ItemsPointer filter is applied in a Map state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("afterItemsPointer")]
    public string? AfterItemsPointer { get; init; }

    /// <summary>
    /// The tolerated failure threshold for a Map state as defined in number of Map state iterations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toleratedFailureCount")]
    public int? ToleratedFailureCount { get; init; }

    /// <summary>
    /// The tolerated failure threshold for a Map state as defined in percentage of Map state iterations.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("toleratedFailurePercentage")]
    public double? ToleratedFailurePercentage { get; init; }

    /// <summary>
    /// The max concurrency of the Map state.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("maxConcurrency")]
    public int? MaxConcurrency { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
