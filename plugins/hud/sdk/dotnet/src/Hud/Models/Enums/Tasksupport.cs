using System;
using System.Text.Json.Serialization;
using Hud.Core.Enum;

namespace Hud.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Tasksupport>))]
public sealed record Tasksupport : OpenStringEnum<Tasksupport>
{
    private Tasksupport(string value) : base(value)
    {
    }

    public static readonly Tasksupport Forbidden = new("forbidden");

    public static readonly Tasksupport Optional = new("optional");

    public static readonly Tasksupport Required = new("required");

    public TResult Match<TResult>(Func<TResult> onForbidden,
        Func<TResult> onOptional,
        Func<TResult> onRequired,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Forbidden => onForbidden(),
            _ when this == Optional => onOptional(),
            _ when this == Required => onRequired(),
            _ => otherwise(Value)
        };

    public void Match(Action onForbidden, Action onOptional, Action onRequired, Action<string> otherwise)
    {
        if (this == Forbidden) onForbidden();
        else if (this == Optional) onOptional();
        else if (this == Required) onRequired();
        else otherwise(Value);
    }
}
