using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// The operation type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Op>))]
public sealed record Op : OpenStringEnum<Op>
{
    private Op(string value) : base(value)
    {
    }

    public static readonly Op Add = new("add");

    public static readonly Op Remove = new("remove");

    public static readonly Op Replace = new("replace");

    public TResult Match<TResult>(Func<TResult> onAdd,
        Func<TResult> onRemove,
        Func<TResult> onReplace,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Add => onAdd(),
            _ when this == Remove => onRemove(),
            _ when this == Replace => onReplace(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdd, Action onRemove, Action onReplace, Action<string> otherwise)
    {
        if (this == Add) onAdd();
        else if (this == Remove) onRemove();
        else if (this == Replace) onReplace();
        else otherwise(Value);
    }
}
