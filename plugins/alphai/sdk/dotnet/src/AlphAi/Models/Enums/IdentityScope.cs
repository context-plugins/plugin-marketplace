using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<IdentityScope>))]
public sealed record IdentityScope : OpenStringEnum<IdentityScope>
{
    private IdentityScope(string value) : base(value)
    {
    }

    public static readonly IdentityScope IssuerCik = new("issuer_cik");

    public TResult Match<TResult>(Func<TResult> onIssuerCik, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IssuerCik => onIssuerCik(),
            _ => otherwise(Value)
        };

    public void Match(Action onIssuerCik, Action<string> otherwise)
    {
        if (this == IssuerCik) onIssuerCik();
        else otherwise(Value);
    }
}
