using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// Minimum level of diagnostics to return. ERROR returns only ERROR diagnostics, whereas WARNING returns both WARNING and ERROR diagnostics. The default is ERROR.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Severity1>))]
public sealed record Severity1 : OpenStringEnum<Severity1>
{
    private Severity1(string value) : base(value)
    {
    }

    public static readonly Severity1 Error = new("ERROR");

    public static readonly Severity1 Warning = new("WARNING");

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
