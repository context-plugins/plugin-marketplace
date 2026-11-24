using System;
using System.Text.Json.Serialization;
using GoogleAnalytics.Core.Enum;

namespace GoogleAnalytics.Models.Enums;

/// <summary>
/// Required. Immutable. The scope of this dimension.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Scope1>))]
public sealed record Scope1 : OpenStringEnum<Scope1>
{
    private Scope1(string value) : base(value)
    {
    }

    public static readonly Scope1 DimensionScopeUnspecified = new("DIMENSION_SCOPE_UNSPECIFIED");

    public static readonly Scope1 Event = new("EVENT");

    public static readonly Scope1 User = new("USER");

    public static readonly Scope1 Item = new("ITEM");

    public TResult Match<TResult>(Func<TResult> onDimensionScopeUnspecified,
        Func<TResult> onEvent,
        Func<TResult> onUser,
        Func<TResult> onItem,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == DimensionScopeUnspecified => onDimensionScopeUnspecified(),
            _ when this == Event => onEvent(),
            _ when this == User => onUser(),
            _ when this == Item => onItem(),
            _ => otherwise(Value)
        };

    public void Match(Action onDimensionScopeUnspecified,
        Action onEvent,
        Action onUser,
        Action onItem,
        Action<string> otherwise)
    {
        if (this == DimensionScopeUnspecified) onDimensionScopeUnspecified();
        else if (this == Event) onEvent();
        else if (this == User) onUser();
        else if (this == Item) onItem();
        else otherwise(Value);
    }
}
