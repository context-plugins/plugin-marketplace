using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmzTarget9>))]
public sealed record XAmzTarget9 : OpenStringEnum<XAmzTarget9>
{
    private XAmzTarget9(string value) : base(value)
    {
    }

    public static readonly XAmzTarget9 SimpleWorkflowServiceRecordActivityTaskHeartbeat = new(
        "SimpleWorkflowService.RecordActivityTaskHeartbeat");

    public TResult Match<TResult>(Func<TResult> onSimpleWorkflowServiceRecordActivityTaskHeartbeat,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this ==
                SimpleWorkflowServiceRecordActivityTaskHeartbeat => onSimpleWorkflowServiceRecordActivityTaskHeartbeat(),
            _ => otherwise(Value)
        };

    public void Match(Action onSimpleWorkflowServiceRecordActivityTaskHeartbeat, Action<string> otherwise)
    {
        if (this ==
            SimpleWorkflowServiceRecordActivityTaskHeartbeat) onSimpleWorkflowServiceRecordActivityTaskHeartbeat();
        else otherwise(Value);
    }
}
