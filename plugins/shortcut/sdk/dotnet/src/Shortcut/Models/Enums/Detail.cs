using System;
using System.Text.Json.Serialization;
using Shortcut.Core.Enum;

namespace Shortcut.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Detail>))]
public sealed record Detail : OpenStringEnum<Detail>
{
    private Detail(string value) : base(value)
    {
    }

    public static readonly Detail Full = new("full");

    public static readonly Detail Slim = new("slim");

    public TResult Match<TResult>(Func<TResult> onFull, Func<TResult> onSlim, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Full => onFull(),
            _ when this == Slim => onSlim(),
            _ => otherwise(Value)
        };

    public void Match(Action onFull, Action onSlim, Action<string> otherwise)
    {
        if (this == Full) onFull();
        else if (this == Slim) onSlim();
        else otherwise(Value);
    }
}
