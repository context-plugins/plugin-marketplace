using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Required. The method of transportation to calculate the commute time for.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CommuteMethod>))]
public sealed record CommuteMethod : OpenStringEnum<CommuteMethod>
{
    private CommuteMethod(string value) : base(value)
    {
    }

    public static readonly CommuteMethod CommuteMethodUnspecified = new("COMMUTE_METHOD_UNSPECIFIED");

    public static readonly CommuteMethod Driving = new("DRIVING");

    public static readonly CommuteMethod Transit = new("TRANSIT");

    public static readonly CommuteMethod Walking = new("WALKING");

    public static readonly CommuteMethod Cycling = new("CYCLING");

    public static readonly CommuteMethod TransitAccessible = new("TRANSIT_ACCESSIBLE");

    public TResult Match<TResult>(Func<TResult> onCommuteMethodUnspecified,
        Func<TResult> onDriving,
        Func<TResult> onTransit,
        Func<TResult> onWalking,
        Func<TResult> onCycling,
        Func<TResult> onTransitAccessible,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CommuteMethodUnspecified => onCommuteMethodUnspecified(),
            _ when this == Driving => onDriving(),
            _ when this == Transit => onTransit(),
            _ when this == Walking => onWalking(),
            _ when this == Cycling => onCycling(),
            _ when this == TransitAccessible => onTransitAccessible(),
            _ => otherwise(Value)
        };

    public void Match(Action onCommuteMethodUnspecified,
        Action onDriving,
        Action onTransit,
        Action onWalking,
        Action onCycling,
        Action onTransitAccessible,
        Action<string> otherwise)
    {
        if (this == CommuteMethodUnspecified) onCommuteMethodUnspecified();
        else if (this == Driving) onDriving();
        else if (this == Transit) onTransit();
        else if (this == Walking) onWalking();
        else if (this == Cycling) onCycling();
        else if (this == TransitAccessible) onTransitAccessible();
        else otherwise(Value);
    }
}
