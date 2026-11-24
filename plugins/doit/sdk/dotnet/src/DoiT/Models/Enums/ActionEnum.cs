using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Action to perform with this rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ActionEnum>))]
public sealed record ActionEnum : OpenStringEnum<ActionEnum>
{
    private ActionEnum(string value) : base(value)
    {
    }

    public static readonly ActionEnum Create = new("create");

    public static readonly ActionEnum Update = new("update");

    public static readonly ActionEnum Select = new("select");

    public TResult Match<TResult>(Func<TResult> onCreate,
        Func<TResult> onUpdate,
        Func<TResult> onSelect,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Create => onCreate(),
            _ when this == Update => onUpdate(),
            _ when this == Select => onSelect(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreate, Action onUpdate, Action onSelect, Action<string> otherwise)
    {
        if (this == Create) onCreate();
        else if (this == Update) onUpdate();
        else if (this == Select) onSelect();
        else otherwise(Value);
    }
}
