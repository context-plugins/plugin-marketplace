using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Classification1>))]
public sealed record Classification1 : OpenStringEnum<Classification1>
{
    private Classification1(string value) : base(value)
    {
    }

    public static readonly Classification1 Public = new("public");

    public static readonly Classification1 Internal = new("internal");

    public static readonly Classification1 Confidential = new("confidential");

    public static readonly Classification1 Restricted = new("restricted");

    public TResult Match<TResult>(Func<TResult> onPublic,
        Func<TResult> onInternal,
        Func<TResult> onConfidential,
        Func<TResult> onRestricted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Public => onPublic(),
            _ when this == Internal => onInternal(),
            _ when this == Confidential => onConfidential(),
            _ when this == Restricted => onRestricted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPublic,
        Action onInternal,
        Action onConfidential,
        Action onRestricted,
        Action<string> otherwise)
    {
        if (this == Public) onPublic();
        else if (this == Internal) onInternal();
        else if (this == Confidential) onConfidential();
        else if (this == Restricted) onRestricted();
        else otherwise(Value);
    }
}
