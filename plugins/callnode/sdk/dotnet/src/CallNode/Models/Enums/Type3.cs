using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 Local = new("local");

    public static readonly Type3 Tollfree = new("tollfree");

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
