using System;
using System.Text.Json.Serialization;
using AtlassianCompass.Core.Enum;

namespace AtlassianCompass.Models.Enums;

/// <summary>
/// The type of environment where the deployment event occurred.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Category>))]
public sealed record Category : OpenStringEnum<Category>
{
    private Category(string value) : base(value)
    {
    }

    public static readonly Category Production = new("PRODUCTION");

    public static readonly Category Staging = new("STAGING");

    public static readonly Category Testing = new("TESTING");

    public static readonly Category Development = new("DEVELOPMENT");

    public static readonly Category Unmapped = new("UNMAPPED");

    public TResult Match<TResult>(Func<TResult> onProduction,
        Func<TResult> onStaging,
        Func<TResult> onTesting,
        Func<TResult> onDevelopment,
        Func<TResult> onUnmapped,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Production => onProduction(),
            _ when this == Staging => onStaging(),
            _ when this == Testing => onTesting(),
            _ when this == Development => onDevelopment(),
            _ when this == Unmapped => onUnmapped(),
            _ => otherwise(Value)
        };

    public void Match(Action onProduction,
        Action onStaging,
        Action onTesting,
        Action onDevelopment,
        Action onUnmapped,
        Action<string> otherwise)
    {
        if (this == Production) onProduction();
        else if (this == Staging) onStaging();
        else if (this == Testing) onTesting();
        else if (this == Development) onDevelopment();
        else if (this == Unmapped) onUnmapped();
        else otherwise(Value);
    }
}
