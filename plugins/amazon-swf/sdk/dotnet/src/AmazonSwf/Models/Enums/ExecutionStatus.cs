using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The current status of the execution.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ExecutionStatus>))]
public sealed record ExecutionStatus : OpenStringEnum<ExecutionStatus>
{
    private ExecutionStatus(string value) : base(value)
    {
    }

    public static readonly ExecutionStatus Open = new("OPEN");

    public static readonly ExecutionStatus Closed = new("CLOSED");

    public TResult Match<TResult>(Func<TResult> onOpen, Func<TResult> onClosed, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Closed => onClosed(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onClosed, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Closed) onClosed();
        else otherwise(Value);
    }
}
