using System;
using System.Text.Json.Serialization;
using StayingApi.Core.Enum;

namespace StayingApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Platform>))]
public sealed record Platform : OpenStringEnum<Platform>
{
    private Platform(string value) : base(value)
    {
    }

    public static readonly Platform Airbnb = new("airbnb");

    public static readonly Platform Booking = new("booking");

    public static readonly Platform Vrbo = new("vrbo");

    public static readonly Platform Expedia = new("expedia");

    public static readonly Platform Hotels = new("hotels");

    public static readonly Platform Google = new("google");

    public static readonly Platform Tripadvisor = new("tripadvisor");

    public TResult Match<TResult>(Func<TResult> onAirbnb,
        Func<TResult> onBooking,
        Func<TResult> onVrbo,
        Func<TResult> onExpedia,
        Func<TResult> onHotels,
        Func<TResult> onGoogle,
        Func<TResult> onTripadvisor,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Airbnb => onAirbnb(),
            _ when this == Booking => onBooking(),
            _ when this == Vrbo => onVrbo(),
            _ when this == Expedia => onExpedia(),
            _ when this == Hotels => onHotels(),
            _ when this == Google => onGoogle(),
            _ when this == Tripadvisor => onTripadvisor(),
            _ => otherwise(Value)
        };

    public void Match(Action onAirbnb,
        Action onBooking,
        Action onVrbo,
        Action onExpedia,
        Action onHotels,
        Action onGoogle,
        Action onTripadvisor,
        Action<string> otherwise)
    {
        if (this == Airbnb) onAirbnb();
        else if (this == Booking) onBooking();
        else if (this == Vrbo) onVrbo();
        else if (this == Expedia) onExpedia();
        else if (this == Hotels) onHotels();
        else if (this == Google) onGoogle();
        else if (this == Tripadvisor) onTripadvisor();
        else otherwise(Value);
    }
}
