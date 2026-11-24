using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Filter mode to apply. When type is "allocation_rule", only "is" and "contains" modes are supported.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ModeDoiTAllocationsApi>))]
public sealed record ModeDoiTAllocationsApi : OpenStringEnum<ModeDoiTAllocationsApi>
{
    private ModeDoiTAllocationsApi(string value) : base(value)
    {
    }

    public static readonly ModeDoiTAllocationsApi IsMember = new("is");

    public static readonly ModeDoiTAllocationsApi StartsWith = new("starts_with");

    public static readonly ModeDoiTAllocationsApi EndsWith = new("ends_with");

    public static readonly ModeDoiTAllocationsApi Contains = new("contains");

    public static readonly ModeDoiTAllocationsApi Regexp = new("regexp");

    public TResult Match<TResult>(Func<TResult> onIsMember,
        Func<TResult> onStartsWith,
        Func<TResult> onEndsWith,
        Func<TResult> onContains,
        Func<TResult> onRegexp,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IsMember => onIsMember(),
            _ when this == StartsWith => onStartsWith(),
            _ when this == EndsWith => onEndsWith(),
            _ when this == Contains => onContains(),
            _ when this == Regexp => onRegexp(),
            _ => otherwise(Value)
        };

    public void Match(Action onIsMember,
        Action onStartsWith,
        Action onEndsWith,
        Action onContains,
        Action onRegexp,
        Action<string> otherwise)
    {
        if (this == IsMember) onIsMember();
        else if (this == StartsWith) onStartsWith();
        else if (this == EndsWith) onEndsWith();
        else if (this == Contains) onContains();
        else if (this == Regexp) onRegexp();
        else otherwise(Value);
    }
}
