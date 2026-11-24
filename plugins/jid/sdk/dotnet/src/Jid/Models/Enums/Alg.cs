using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Alg>))]
public sealed record Alg : OpenStringEnum<Alg>
{
    private Alg(string value) : base(value)
    {
    }

    public static readonly Alg Ed25519 = new("Ed25519");

    public TResult Match<TResult>(Func<TResult> onEd25519, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Ed25519 => onEd25519(),
            _ => otherwise(Value)
        };

    public void Match(Action onEd25519, Action<string> otherwise)
    {
        if (this == Ed25519) onEd25519();
        else otherwise(Value);
    }
}
