using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// Specifies if the resource collection in the request is added or deleted to the resource collection.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Add = new("ADD");

    public static readonly ActionEnum Remove = new("REMOVE");

    public TResult Match<TResult>(Func<TResult> onAdd, Func<TResult> onRemove, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Add => onAdd(),
            _ when this == Remove => onRemove(),
            _ => otherwise(Value)
        };

    public void Match(Action onAdd, Action onRemove, Action<string> otherwise)
    {
        if (this == Add) onAdd();
        else if (this == Remove) onRemove();
        else otherwise(Value);
    }
}
