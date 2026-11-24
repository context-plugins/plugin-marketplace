using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. Type of reservation to consume
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ConsumeReservationType>))]
public sealed record ConsumeReservationType : OpenStringEnum<ConsumeReservationType>
{
    private ConsumeReservationType(string value) : base(value)
    {
    }

    public static readonly ConsumeReservationType TypeUnspecified = new("TYPE_UNSPECIFIED");

    public static readonly ConsumeReservationType NoReservation = new("NO_RESERVATION");

    public static readonly ConsumeReservationType AnyReservation = new("ANY_RESERVATION");

    public static readonly ConsumeReservationType SpecificReservation = new("SPECIFIC_RESERVATION");

    public TResult Match<TResult>(Func<TResult> onTypeUnspecified,
        Func<TResult> onNoReservation,
        Func<TResult> onAnyReservation,
        Func<TResult> onSpecificReservation,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == TypeUnspecified => onTypeUnspecified(),
            _ when this == NoReservation => onNoReservation(),
            _ when this == AnyReservation => onAnyReservation(),
            _ when this == SpecificReservation => onSpecificReservation(),
            _ => otherwise(Value)
        };

    public void Match(Action onTypeUnspecified,
        Action onNoReservation,
        Action onAnyReservation,
        Action onSpecificReservation,
        Action<string> otherwise)
    {
        if (this == TypeUnspecified) onTypeUnspecified();
        else if (this == NoReservation) onNoReservation();
        else if (this == AnyReservation) onAnyReservation();
        else if (this == SpecificReservation) onSpecificReservation();
        else otherwise(Value);
    }
}
