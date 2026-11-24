using System;
using System.Text.Json.Serialization;
using AmazonDevOpsGuru.Core.Enum;

namespace AmazonDevOpsGuru.Models.Enums;

/// <summary>
/// The type of insights you are searching for (REACTIVE or PROACTIVE).
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type3>))]
public sealed record Type3 : OpenStringEnum<Type3>
{
    private Type3(string value) : base(value)
    {
    }

    public static readonly Type3 Reactive = new("REACTIVE");

    public static readonly Type3 Proactive = new("PROACTIVE");

    public TResult Match<TResult>(Func<TResult> onReactive,
        Func<TResult> onProactive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Reactive => onReactive(),
            _ when this == Proactive => onProactive(),
            _ => otherwise(Value)
        };

    public void Match(Action onReactive, Action onProactive, Action<string> otherwise)
    {
        if (this == Reactive) onReactive();
        else if (this == Proactive) onProactive();
        else otherwise(Value);
    }
}
