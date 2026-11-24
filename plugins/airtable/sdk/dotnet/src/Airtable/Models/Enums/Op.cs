using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

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

    public static readonly Op Replace = new("replace");

    public static readonly Op Remove = new("remove");

    public TResult Match<TResult>(Func<TResult> onAdd,
        Func<TResult> onReplace,
        Func<TResult> onRemove,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Add => onAdd(),
            _ when this == Replace => onReplace(),
            _ when this == Remove => onRemove(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdd, Action onReplace, Action onRemove, Action<string> otherwise)
    {
        if (this == Add) onAdd();
        else if (this == Replace) onReplace();
        else if (this == Remove) onRemove();
        else otherwise(Value);
    }
}
