using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Describes the medical specialty represented in your media.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Specialty>))]
public sealed record Specialty : OpenStringEnum<Specialty>
{
    private Specialty(string value) : base(value)
    {
    }

    public static readonly Specialty Primarycare = new("PRIMARYCARE");

    public TResult Match<TResult>(Func<TResult> onPrimarycare, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Primarycare => onPrimarycare(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrimarycare, Action<string> otherwise)
    {
        if (this == Primarycare) onPrimarycare();
        else otherwise(Value);
    }
}
