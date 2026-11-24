using System;
using System.Text.Json.Serialization;
using RelmCrm.Core.Enum;

namespace RelmCrm.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Create = new("create");

    public static readonly Method Update = new("update");

    public static readonly Method Delete = new("delete");

    public TResult Match<TResult>(Func<TResult> onCreate,
        Func<TResult> onUpdate,
        Func<TResult> onDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Create => onCreate(),
            _ when this == Update => onUpdate(),
            _ when this == Delete => onDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreate, Action onUpdate, Action onDelete, Action<string> otherwise)
    {
        if (this == Create) onCreate();
        else if (this == Update) onUpdate();
        else if (this == Delete) onDelete();
        else otherwise(Value);
    }
}
