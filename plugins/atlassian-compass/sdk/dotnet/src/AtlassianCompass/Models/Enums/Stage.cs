using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The stage of the lifecycle event.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Stage>))]
public sealed record Stage : OpenStringEnum<Stage>
{
    private Stage(string value) : base(value)
    {
    }

    public static readonly Stage PreRelease = new("PRE_RELEASE");

    public static readonly Stage Production = new("PRODUCTION");

    public static readonly Stage Deprecation = new("DEPRECATION");

    public static readonly Stage EndOfLife = new("END_OF_LIFE");

    public TResult Match<TResult>(Func<TResult> onPreRelease,
        Func<TResult> onProduction,
        Func<TResult> onDeprecation,
        Func<TResult> onEndOfLife,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PreRelease => onPreRelease(),
            _ when this == Production => onProduction(),
            _ when this == Deprecation => onDeprecation(),
            _ when this == EndOfLife => onEndOfLife(),
            _ => otherwise(Value)
        };

    public void Match(Action onPreRelease,
        Action onProduction,
        Action onDeprecation,
        Action onEndOfLife,
        Action<string> otherwise)
    {
        if (this == PreRelease) onPreRelease();
        else if (this == Production) onProduction();
        else if (this == Deprecation) onDeprecation();
        else if (this == EndOfLife) onEndOfLife();
        else otherwise(Value);
    }
}
