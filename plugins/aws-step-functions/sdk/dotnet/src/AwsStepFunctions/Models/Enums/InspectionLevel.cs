using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Determines the values to return when a state is tested. You can specify one of the following types: INFO: Shows the final state output. By default, Step Functions sets inspectionLevel to INFO if you don't specify a level. DEBUG: Shows the final state output along with the input and output data processing result. TRACE: Shows the HTTP request and response for an HTTP Task. This level also shows the final state output along with the input and output data processing result. Each of these levels also provide information about the status of the state execution and the next state to transition to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InspectionLevel>))]
public sealed record InspectionLevel : OpenStringEnum<InspectionLevel>
{
    private InspectionLevel(string value) : base(value)
    {
    }

    public static readonly InspectionLevel Info = new("INFO");

    public static readonly InspectionLevel Debug = new("DEBUG");

    public static readonly InspectionLevel Trace = new("TRACE");

    public TResult Match<TResult>(Func<TResult> onInfo,
        Func<TResult> onDebug,
        Func<TResult> onTrace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Info => onInfo(),
            _ when this == Debug => onDebug(),
            _ when this == Trace => onTrace(),
            _ => otherwise(Value)
        };

    public void Match(Action onInfo, Action onDebug, Action onTrace, Action<string> otherwise)
    {
        if (this == Info) onInfo();
        else if (this == Debug) onDebug();
        else if (this == Trace) onTrace();
        else otherwise(Value);
    }
}
