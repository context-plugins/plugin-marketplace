using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Severity>))]
public sealed record Severity : OpenStringEnum<Severity>
{
    private Severity(string value) : base(value)
    {
    }

    public static readonly Severity Error = new("ERROR");

    public static readonly Severity Warning = new("WARNING");

    public static readonly Severity Information = new("INFORMATION");

    public TResult Match<TResult>(Func<TResult> onError,
        Func<TResult> onWarning,
        Func<TResult> onInformation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Error => onError(),
            _ when this == Warning => onWarning(),
            _ when this == Information => onInformation(),
            _ => otherwise(Value)
        };

    public void Match(Action onError, Action onWarning, Action onInformation, Action<string> otherwise)
    {
        if (this == Error) onError();
        else if (this == Warning) onWarning();
        else if (this == Information) onInformation();
        else otherwise(Value);
    }
}
