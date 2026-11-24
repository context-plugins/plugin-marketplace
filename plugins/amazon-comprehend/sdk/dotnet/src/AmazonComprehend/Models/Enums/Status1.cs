using System;
using System.Text.Json.Serialization;
using AmazonComprehend.Core.Enum;

namespace AmazonComprehend.Models.Enums;

/// <summary>
/// The dataset status. While the system creates the dataset, the status is CREATING. When the dataset is ready to use, the status changes to COMPLETED.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Creating = new("CREATING");

    public static readonly Status1 Completed = new("COMPLETED");

    public static readonly Status1 Failed = new("FAILED");

    public TResult Match<TResult>(Func<TResult> onCreating,
        Func<TResult> onCompleted,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Creating => onCreating(),
            _ when this == Completed => onCompleted(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreating, Action onCompleted, Action onFailed, Action<string> otherwise)
    {
        if (this == Creating) onCreating();
        else if (this == Completed) onCompleted();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
