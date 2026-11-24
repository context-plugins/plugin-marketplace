using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

/// <summary>
/// Provides the medical specialty represented in your media.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Specialty1>))]
public sealed record Specialty1 : OpenStringEnum<Specialty1>
{
    private Specialty1(string value) : base(value)
    {
    }

    public static readonly Specialty1 Primarycare = new("PRIMARYCARE");

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
