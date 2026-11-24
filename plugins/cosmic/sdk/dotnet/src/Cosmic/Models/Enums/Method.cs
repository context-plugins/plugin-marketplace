using System;
using System.Text.Json.Serialization;
using Cosmic.Core.Enum;

namespace Cosmic.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Method>))]
public sealed record Method : OpenStringEnum<Method>
{
    private Method(string value) : base(value)
    {
    }

    public static readonly Method Add = new("add");

    public static readonly Method Edit = new("edit");

    public static readonly Method Delete = new("delete");

    public TResult Match<TResult>(Func<TResult> onAdd,
        Func<TResult> onEdit,
        Func<TResult> onDelete,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Add => onAdd(),
            _ when this == Edit => onEdit(),
            _ when this == Delete => onDelete(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdd, Action onEdit, Action onDelete, Action<string> otherwise)
    {
        if (this == Add) onAdd();
        else if (this == Edit) onEdit();
        else if (this == Delete) onDelete();
        else otherwise(Value);
    }
}
