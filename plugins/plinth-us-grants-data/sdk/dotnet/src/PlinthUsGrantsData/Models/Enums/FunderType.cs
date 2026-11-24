using System;
using System.Text.Json.Serialization;
using PlinthUsGrantsData.Core.Enum;

namespace PlinthUsGrantsData.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FunderType>))]
public sealed record FunderType : OpenStringEnum<FunderType>
{
    private FunderType(string value) : base(value)
    {
    }

    public static readonly FunderType PrivateFoundation = new("private_foundation");

    public static readonly FunderType PublicCharity = new("public_charity");

    public static readonly FunderType DafOrPassthrough = new("daf_or_passthrough");

    public TResult Match<TResult>(Func<TResult> onPrivateFoundation,
        Func<TResult> onPublicCharity,
        Func<TResult> onDafOrPassthrough,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PrivateFoundation => onPrivateFoundation(),
            _ when this == PublicCharity => onPublicCharity(),
            _ when this == DafOrPassthrough => onDafOrPassthrough(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrivateFoundation,
        Action onPublicCharity,
        Action onDafOrPassthrough,
        Action<string> otherwise)
    {
        if (this == PrivateFoundation) onPrivateFoundation();
        else if (this == PublicCharity) onPublicCharity();
        else if (this == DafOrPassthrough) onDafOrPassthrough();
        else otherwise(Value);
    }
}
