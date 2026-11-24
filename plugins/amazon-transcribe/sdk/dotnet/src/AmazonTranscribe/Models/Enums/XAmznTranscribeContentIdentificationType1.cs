using System;
using System.Text.Json.Serialization;
using AmazonTranscribe.Core.Enum;

namespace AmazonTranscribe.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<XAmznTranscribeContentIdentificationType1>))]
public sealed record XAmznTranscribeContentIdentificationType1 : OpenStringEnum<XAmznTranscribeContentIdentificationType1>
{
    private XAmznTranscribeContentIdentificationType1(string value) : base(value)
    {
    }

    public static readonly XAmznTranscribeContentIdentificationType1 Phi = new("PHI");

    public TResult Match<TResult>(Func<TResult> onPhi, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Phi => onPhi(),
            _ => otherwise(Value)
        };

    public void Match(Action onPhi, Action<string> otherwise)
    {
        if (this == Phi) onPhi();
        else otherwise(Value);
    }
}
