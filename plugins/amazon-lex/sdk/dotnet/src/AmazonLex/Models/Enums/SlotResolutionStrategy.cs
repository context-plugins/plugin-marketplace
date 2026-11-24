using System;
using System.Text.Json.Serialization;
using AmazonLex.Core.Enum;

namespace AmazonLex.Models.Enums;

/// <summary>
/// Specifies whether assisted slot resolution is turned on for the slot or not. If the value is EnhancedFallback, assisted slot resolution is activated when Amazon Lex V2 defaults to the AMAZON.FallbackIntent. If the value is Default, assisted slot resolution is turned off.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SlotResolutionStrategy>))]
public sealed record SlotResolutionStrategy : OpenStringEnum<SlotResolutionStrategy>
{
    private SlotResolutionStrategy(string value) : base(value)
    {
    }

    public static readonly SlotResolutionStrategy EnhancedFallback = new("EnhancedFallback");

    public static readonly SlotResolutionStrategy Default = new("Default");

    public TResult Match<TResult>(Func<TResult> onEnhancedFallback,
        Func<TResult> onDefault,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == EnhancedFallback => onEnhancedFallback(),
            _ when this == Default => onDefault(),
            _ => otherwise(Value)
        };

    public void Match(Action onEnhancedFallback, Action onDefault, Action<string> otherwise)
    {
        if (this == EnhancedFallback) onEnhancedFallback();
        else if (this == Default) onDefault();
        else otherwise(Value);
    }
}
