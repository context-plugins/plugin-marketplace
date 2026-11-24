using System;
using System.Text.Json.Serialization;
using Fellow.Core.Enum;

namespace Fellow.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CompletionType>))]
public sealed record CompletionType : OpenStringEnum<CompletionType>
{
    private CompletionType(string value) : base(value)
    {
    }

    public static readonly CompletionType All = new("all");

    public static readonly CompletionType Any = new("any");

    public TResult Match<TResult>(Func<TResult> onAll, Func<TResult> onAny, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Any => onAny(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onAny, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Any) onAny();
        else otherwise(Value);
    }
}
