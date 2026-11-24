using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the medical specialty that you specified in your request.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SpecialtyAmazonTranscribeServiceOperationsApi>))]
public sealed record SpecialtyAmazonTranscribeServiceOperationsApi : OpenStringEnum<SpecialtyAmazonTranscribeServiceOperationsApi>
{
    private SpecialtyAmazonTranscribeServiceOperationsApi(string value) : base(value)
    {
    }

    public static readonly SpecialtyAmazonTranscribeServiceOperationsApi Primarycare = new("PRIMARYCARE");

    public static readonly SpecialtyAmazonTranscribeServiceOperationsApi Cardiology = new("CARDIOLOGY");

    public static readonly SpecialtyAmazonTranscribeServiceOperationsApi Neurology = new("NEUROLOGY");

    public static readonly SpecialtyAmazonTranscribeServiceOperationsApi Oncology = new("ONCOLOGY");

    public static readonly SpecialtyAmazonTranscribeServiceOperationsApi Radiology = new("RADIOLOGY");

    public static readonly SpecialtyAmazonTranscribeServiceOperationsApi Urology = new("UROLOGY");

    public TResult Match<TResult>(Func<TResult> onPrimarycare,
        Func<TResult> onCardiology,
        Func<TResult> onNeurology,
        Func<TResult> onOncology,
        Func<TResult> onRadiology,
        Func<TResult> onUrology,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Primarycare => onPrimarycare(),
            _ when this == Cardiology => onCardiology(),
            _ when this == Neurology => onNeurology(),
            _ when this == Oncology => onOncology(),
            _ when this == Radiology => onRadiology(),
            _ when this == Urology => onUrology(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrimarycare,
        Action onCardiology,
        Action onNeurology,
        Action onOncology,
        Action onRadiology,
        Action onUrology,
        Action<string> otherwise)
    {
        if (this == Primarycare) onPrimarycare();
        else if (this == Cardiology) onCardiology();
        else if (this == Neurology) onNeurology();
        else if (this == Oncology) onOncology();
        else if (this == Radiology) onRadiology();
        else if (this == Urology) onUrology();
        else otherwise(Value);
    }
}
