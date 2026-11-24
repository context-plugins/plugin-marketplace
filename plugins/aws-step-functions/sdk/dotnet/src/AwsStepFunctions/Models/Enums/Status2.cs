using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The current status of the state machine.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status2>))]
public sealed record Status2 : OpenStringEnum<Status2>
{
    private Status2(string value) : base(value)
    {
    }

    public static readonly Status2 Active = new("ACTIVE");

    public static readonly Status2 Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onActive, Func<TResult> onDeleting, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Active => onActive(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onActive, Action onDeleting, Action<string> otherwise)
    {
        if (this == Active) onActive();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
