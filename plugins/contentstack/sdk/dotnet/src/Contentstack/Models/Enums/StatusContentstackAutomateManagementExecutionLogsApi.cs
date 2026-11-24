using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Outcome status of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusContentstackAutomateManagementExecutionLogsApi>))]
public sealed record StatusContentstackAutomateManagementExecutionLogsApi : OpenStringEnum<StatusContentstackAutomateManagementExecutionLogsApi>
{
    private StatusContentstackAutomateManagementExecutionLogsApi(string value) : base(value)
    {
    }

    public static readonly StatusContentstackAutomateManagementExecutionLogsApi Success = new("success");

    public static readonly StatusContentstackAutomateManagementExecutionLogsApi Failure = new("failure");

    public static readonly StatusContentstackAutomateManagementExecutionLogsApi Partial = new("partial");

    public TResult Match<TResult>(Func<TResult> onSuccess,
        Func<TResult> onFailure,
        Func<TResult> onPartial,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Success => onSuccess(),
            _ when this == Failure => onFailure(),
            _ when this == Partial => onPartial(),
            _ => otherwise(Value)
        };

    public void Match(Action onSuccess, Action onFailure, Action onPartial, Action<string> otherwise)
    {
        if (this == Success) onSuccess();
        else if (this == Failure) onFailure();
        else if (this == Partial) onPartial();
        else otherwise(Value);
    }
}
