using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The purpose of the condition set, indicating its intended use.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConditionSetPurpose>))]
public sealed record ConditionSetPurpose : OpenStringEnum<ConditionSetPurpose>
{
    private ConditionSetPurpose(string value) : base(value)
    {
    }

    public static readonly ConditionSetPurpose DynamicContent = new("dynamic_content");

    public TResult Match<TResult>(Func<TResult> onDynamicContent, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DynamicContent => onDynamicContent(),
            _ => otherwise(Value)
        };

    public void Match(Action onDynamicContent, Action<string> otherwise)
    {
        if (this == DynamicContent) onDynamicContent();
        else otherwise(Value);
    }
}
