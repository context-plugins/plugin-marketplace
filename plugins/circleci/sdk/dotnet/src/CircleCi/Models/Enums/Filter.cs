using System;
using System.Text.Json.Serialization;
using CircleCi.Core.Enum;

namespace CircleCi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Filter>))]
public sealed record Filter : OpenStringEnum<Filter>
{
    private Filter(string value) : base(value)
    {
    }

    public static readonly Filter Completed = new("completed");

    public static readonly Filter Successful = new("successful");

    public static readonly Filter Failed = new("failed");

    public TResult Match<TResult>(Func<TResult> onCompleted,
        Func<TResult> onSuccessful,
        Func<TResult> onFailed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Completed => onCompleted(),
            _ when this == Successful => onSuccessful(),
            _ when this == Failed => onFailed(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompleted, Action onSuccessful, Action onFailed, Action<string> otherwise)
    {
        if (this == Completed) onCompleted();
        else if (this == Successful) onSuccessful();
        else if (this == Failed) onFailed();
        else otherwise(Value);
    }
}
