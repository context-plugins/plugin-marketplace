using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The status of this report.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Status4>))]
public sealed record Status4 : OpenStringEnum<Status4>
{
    private Status4(string value) : base(value)
    {
    }

    public static readonly Status4 Generating = new("GENERATING");

    public static readonly Status4 Succeeded = new("SUCCEEDED");

    public static readonly Status4 Failed = new("FAILED");

    public static readonly Status4 Incomplete = new("INCOMPLETE");

    public static readonly Status4 Deleting = new("DELETING");

    public TResult Match<TResult>(Func<TResult> onGenerating,
        Func<TResult> onSucceeded,
        Func<TResult> onFailed,
        Func<TResult> onIncomplete,
        Func<TResult> onDeleting,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Generating => onGenerating(),
            _ when this == Succeeded => onSucceeded(),
            _ when this == Failed => onFailed(),
            _ when this == Incomplete => onIncomplete(),
            _ when this == Deleting => onDeleting(),
            _ => otherwise(Value)
        };

    public void Match(Action onGenerating,
        Action onSucceeded,
        Action onFailed,
        Action onIncomplete,
        Action onDeleting,
        Action<string> otherwise)
    {
        if (this == Generating) onGenerating();
        else if (this == Succeeded) onSucceeded();
        else if (this == Failed) onFailed();
        else if (this == Incomplete) onIncomplete();
        else if (this == Deleting) onDeleting();
        else otherwise(Value);
    }
}
