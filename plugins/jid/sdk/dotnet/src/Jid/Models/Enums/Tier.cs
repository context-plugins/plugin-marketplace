using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Tier>))]
public sealed record Tier : OpenStringEnum<Tier>
{
    private Tier(string value) : base(value)
    {
    }

    public static readonly Tier WebsiteDeclared = new("website_declared");

    public TResult Match<TResult>(Func<TResult> onWebsiteDeclared, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WebsiteDeclared => onWebsiteDeclared(),
            _ => otherwise(Value)
        };

    public void Match(Action onWebsiteDeclared, Action<string> otherwise)
    {
        if (this == WebsiteDeclared) onWebsiteDeclared();
        else otherwise(Value);
    }
}
