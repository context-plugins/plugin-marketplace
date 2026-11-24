using System;
using System.Text.Json.Serialization;
using CallNode.Core.Enum;

namespace CallNode.Models.Enums;

/// <summary>
/// fine = 204×196, standard = 204×98.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Resolution>))]
public sealed record Resolution : OpenStringEnum<Resolution>
{
    private Resolution(string value) : base(value)
    {
    }

    public static readonly Resolution Fine = new("fine");

    public static readonly Resolution Standard = new("standard");

    public TResult Match<TResult>(Func<TResult> onFine, Func<TResult> onStandard, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fine => onFine(),
            _ when this == Standard => onStandard(),
            _ => otherwise(Value)
        };

    public void Match(Action onFine, Action onStandard, Action<string> otherwise)
    {
        if (this == Fine) onFine();
        else if (this == Standard) onStandard();
        else otherwise(Value);
    }
}
