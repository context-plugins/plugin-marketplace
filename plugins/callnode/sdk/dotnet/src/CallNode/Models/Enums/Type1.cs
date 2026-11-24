using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

/// <summary>
/// Optional — derived from the number itself when omitted.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Local = new("local");

    public static readonly Type1 Tollfree = new("tollfree");

    public TResult Match<TResult>(Func<TResult> onLocal, Func<TResult> onTollfree, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Local => onLocal(),
            _ when this == Tollfree => onTollfree(),
            _ => otherwise(Value)
        };

    public void Match(Action onLocal, Action onTollfree, Action<string> otherwise)
    {
        if (this == Local) onLocal();
        else if (this == Tollfree) onTollfree();
        else otherwise(Value);
    }
}
