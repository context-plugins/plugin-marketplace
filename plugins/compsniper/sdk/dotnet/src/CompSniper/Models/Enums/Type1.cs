using System;
using System.Text.Json.Serialization;
using CompSniper.Core.Enum;

namespace CompSniper.Models.Enums;

/// <summary>
/// Select custom unless the shipment will use the exact named carrier packaging.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Custom = new("custom");

    public static readonly Type1 UspsFlatRateEnvelope = new("usps_flat_rate_envelope");

    public static readonly Type1 UspsPaddedFlatRateEnvelope = new("usps_padded_flat_rate_envelope");

    public static readonly Type1 UspsLegalFlatRateEnvelope = new("usps_legal_flat_rate_envelope");

    public static readonly Type1 UspsSmallFlatRateBox = new("usps_small_flat_rate_box");

    public static readonly Type1 UspsMediumFlatRateBox = new("usps_medium_flat_rate_box");

    public static readonly Type1 UspsLargeFlatRateBox = new("usps_large_flat_rate_box");

    public static readonly Type1 UspsExpressFlatRateEnvelope = new("usps_express_flat_rate_envelope");

    public static readonly Type1 FedexOneRateEnvelope = new("fedex_one_rate_envelope");

    public static readonly Type1 FedexOneRatePak = new("fedex_one_rate_pak");

    public static readonly Type1 FedexOneRateExtraSmallBox = new("fedex_one_rate_extra_small_box");

    public static readonly Type1 FedexOneRateSmallBox = new("fedex_one_rate_small_box");

    public static readonly Type1 FedexOneRateMediumBox = new("fedex_one_rate_medium_box");

    public static readonly Type1 FedexOneRateLargeBox = new("fedex_one_rate_large_box");

    public static readonly Type1 FedexOneRateExtraLargeBox = new("fedex_one_rate_extra_large_box");

    public static readonly Type1 FedexOneRateTube = new("fedex_one_rate_tube");

    public TResult Match<TResult>(Func<TResult> onCustom,
        Func<TResult> onUspsFlatRateEnvelope,
        Func<TResult> onUspsPaddedFlatRateEnvelope,
        Func<TResult> onUspsLegalFlatRateEnvelope,
        Func<TResult> onUspsSmallFlatRateBox,
        Func<TResult> onUspsMediumFlatRateBox,
        Func<TResult> onUspsLargeFlatRateBox,
        Func<TResult> onUspsExpressFlatRateEnvelope,
        Func<TResult> onFedexOneRateEnvelope,
        Func<TResult> onFedexOneRatePak,
        Func<TResult> onFedexOneRateExtraSmallBox,
        Func<TResult> onFedexOneRateSmallBox,
        Func<TResult> onFedexOneRateMediumBox,
        Func<TResult> onFedexOneRateLargeBox,
        Func<TResult> onFedexOneRateExtraLargeBox,
        Func<TResult> onFedexOneRateTube,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Custom => onCustom(),
            _ when this == UspsFlatRateEnvelope => onUspsFlatRateEnvelope(),
            _ when this == UspsPaddedFlatRateEnvelope => onUspsPaddedFlatRateEnvelope(),
            _ when this == UspsLegalFlatRateEnvelope => onUspsLegalFlatRateEnvelope(),
            _ when this == UspsSmallFlatRateBox => onUspsSmallFlatRateBox(),
            _ when this == UspsMediumFlatRateBox => onUspsMediumFlatRateBox(),
            _ when this == UspsLargeFlatRateBox => onUspsLargeFlatRateBox(),
            _ when this == UspsExpressFlatRateEnvelope => onUspsExpressFlatRateEnvelope(),
            _ when this == FedexOneRateEnvelope => onFedexOneRateEnvelope(),
            _ when this == FedexOneRatePak => onFedexOneRatePak(),
            _ when this == FedexOneRateExtraSmallBox => onFedexOneRateExtraSmallBox(),
            _ when this == FedexOneRateSmallBox => onFedexOneRateSmallBox(),
            _ when this == FedexOneRateMediumBox => onFedexOneRateMediumBox(),
            _ when this == FedexOneRateLargeBox => onFedexOneRateLargeBox(),
            _ when this == FedexOneRateExtraLargeBox => onFedexOneRateExtraLargeBox(),
            _ when this == FedexOneRateTube => onFedexOneRateTube(),
            _ => otherwise(Value)
        };

    public void Match(Action onCustom,
        Action onUspsFlatRateEnvelope,
        Action onUspsPaddedFlatRateEnvelope,
        Action onUspsLegalFlatRateEnvelope,
        Action onUspsSmallFlatRateBox,
        Action onUspsMediumFlatRateBox,
        Action onUspsLargeFlatRateBox,
        Action onUspsExpressFlatRateEnvelope,
        Action onFedexOneRateEnvelope,
        Action onFedexOneRatePak,
        Action onFedexOneRateExtraSmallBox,
        Action onFedexOneRateSmallBox,
        Action onFedexOneRateMediumBox,
        Action onFedexOneRateLargeBox,
        Action onFedexOneRateExtraLargeBox,
        Action onFedexOneRateTube,
        Action<string> otherwise)
    {
        if (this == Custom) onCustom();
        else if (this == UspsFlatRateEnvelope) onUspsFlatRateEnvelope();
        else if (this == UspsPaddedFlatRateEnvelope) onUspsPaddedFlatRateEnvelope();
        else if (this == UspsLegalFlatRateEnvelope) onUspsLegalFlatRateEnvelope();
        else if (this == UspsSmallFlatRateBox) onUspsSmallFlatRateBox();
        else if (this == UspsMediumFlatRateBox) onUspsMediumFlatRateBox();
        else if (this == UspsLargeFlatRateBox) onUspsLargeFlatRateBox();
        else if (this == UspsExpressFlatRateEnvelope) onUspsExpressFlatRateEnvelope();
        else if (this == FedexOneRateEnvelope) onFedexOneRateEnvelope();
        else if (this == FedexOneRatePak) onFedexOneRatePak();
        else if (this == FedexOneRateExtraSmallBox) onFedexOneRateExtraSmallBox();
        else if (this == FedexOneRateSmallBox) onFedexOneRateSmallBox();
        else if (this == FedexOneRateMediumBox) onFedexOneRateMediumBox();
        else if (this == FedexOneRateLargeBox) onFedexOneRateLargeBox();
        else if (this == FedexOneRateExtraLargeBox) onFedexOneRateExtraLargeBox();
        else if (this == FedexOneRateTube) onFedexOneRateTube();
        else otherwise(Value);
    }
}
