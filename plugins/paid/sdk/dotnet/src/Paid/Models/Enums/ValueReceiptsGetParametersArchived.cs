using System;
using System.Text.Json.Serialization;
using Paid.Core.Enum;

namespace Paid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ValueReceiptsGetParametersArchived>))]
public sealed record ValueReceiptsGetParametersArchived : OpenStringEnum<ValueReceiptsGetParametersArchived>
{
    private ValueReceiptsGetParametersArchived(string value) : base(value)
    {
    }

    public static readonly ValueReceiptsGetParametersArchived True = new("true");

    public static readonly ValueReceiptsGetParametersArchived False = new("false");

    public TResult Match<TResult>(Func<TResult> onTrue, Func<TResult> onFalse, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == True => onTrue(),
            _ when this == False => onFalse(),
            _ => otherwise(Value)
        };

    public void Match(Action onTrue, Action onFalse, Action<string> otherwise)
    {
        if (this == True) onTrue();
        else if (this == False) onFalse();
        else otherwise(Value);
    }
}
