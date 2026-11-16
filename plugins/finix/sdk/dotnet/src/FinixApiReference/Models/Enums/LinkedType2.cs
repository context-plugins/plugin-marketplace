using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The type of the resource that is specified in the <c>linked_to</c> field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<LinkedType2>))]
public sealed record LinkedType2 : OpenStringEnum<LinkedType2>
{
    private LinkedType2(string value) : base(value)
    {
    }

    public static readonly LinkedType2 Application = new("APPLICATION");

    public static readonly LinkedType2 Platform = new("PLATFORM");

    public TResult Match<TResult>(Func<TResult> onApplication,
        Func<TResult> onPlatform,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Application => onApplication(),
            _ when this == Platform => onPlatform(),
            _ => otherwise(Value)
        };

    public void Match(Action onApplication, Action onPlatform, Action<string> otherwise)
    {
        if (this == Application) onApplication();
        else if (this == Platform) onPlatform();
        else otherwise(Value);
    }
}
