using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// A value of ERROR means that you cannot create or update a state machine with this definition. WARNING level diagnostics alert you to potential issues, but they will not prevent you from creating or updating your state machine.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity Error = new("ERROR");

    public static readonly Severity Warning = new("WARNING");

    public TResult Match<TResult>(Func<TResult> onError, Func<TResult> onWarning, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Error => onError(),
            _ when this == Warning => onWarning(),
            _ => otherwise(Value)
        };

    public void Match(Action onError, Action onWarning, Action<string> otherwise)
    {
        if (this == Error) onError();
        else if (this == Warning) onWarning();
        else otherwise(Value);
    }
}
