using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PayloadType>))]
public sealed record PayloadType : OpenStringEnum<PayloadType>
{
    private PayloadType(string value) : base(value)
    {
    }

    public static readonly PayloadType Source = new("SOURCE");

    public static readonly PayloadType Destination = new("DESTINATION");

    public TResult Match<TResult>(Func<TResult> onSource,
        Func<TResult> onDestination,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Source => onSource(),
            _ when this == Destination => onDestination(),
            _ => otherwise(Value)
        };

    public void Match(Action onSource, Action onDestination, Action<string> otherwise)
    {
        if (this == Source) onSource();
        else if (this == Destination) onDestination();
        else otherwise(Value);
    }
}
