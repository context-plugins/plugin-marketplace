using System;
using System.Text.Json.Serialization;
using AwsXRay.Core.Enum;

namespace AwsXRay.Models.Enums;

/// <summary>
/// The status of the update.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status1>))]
public sealed record Status1 : OpenStringEnum<Status1>
{
    private Status1(string value) : base(value)
    {
    }

    public static readonly Status1 Pending = new("PENDING");

    public static readonly Status1 Active = new("ACTIVE");

    public TResult Match<TResult>(Func<TResult> onPending, Func<TResult> onActive, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Active => onActive(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onActive, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Active) onActive();
        else otherwise(Value);
    }
}
