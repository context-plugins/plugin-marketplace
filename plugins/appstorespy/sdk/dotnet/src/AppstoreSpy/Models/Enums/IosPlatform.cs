using System;
using System.Text.Json.Serialization;
using AppstoreSpy.Core.Enum;

namespace AppstoreSpy.Models.Enums;

/// <summary>
/// An enumeration.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<IosPlatform>))]
public sealed record IosPlatform : OpenStringEnum<IosPlatform>
{
    private IosPlatform(string value) : base(value)
    {
    }

    public static readonly IosPlatform IPad = new("iPad");

    public static readonly IosPlatform IPhone = new("iPhone");

    public TResult Match<TResult>(Func<TResult> onIPad, Func<TResult> onIPhone, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IPad => onIPad(),
            _ when this == IPhone => onIPhone(),
            _ => otherwise(Value)
        };

    public void Match(Action onIPad, Action onIPhone, Action<string> otherwise)
    {
        if (this == IPad) onIPad();
        else if (this == IPhone) onIPhone();
        else otherwise(Value);
    }
}
