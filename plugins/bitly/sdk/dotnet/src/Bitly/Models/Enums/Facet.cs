using System;
using System.Text.Json.Serialization;
using Bitly.Core.Enum;

namespace Bitly.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Facet>))]
public sealed record Facet : OpenStringEnum<Facet>
{
    private Facet(string value) : base(value)
    {
    }

    public static readonly Facet ReferrersByDomains = new("referrers_by_domains");

    public TResult Match<TResult>(Func<TResult> onReferrersByDomains, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ReferrersByDomains => onReferrersByDomains(),
            _ => otherwise(Value)
        };

    public void Match(Action onReferrersByDomains, Action<string> otherwise)
    {
        if (this == ReferrersByDomains) onReferrersByDomains();
        else otherwise(Value);
    }
}
