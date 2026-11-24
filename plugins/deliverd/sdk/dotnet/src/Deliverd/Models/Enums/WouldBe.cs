using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<WouldBe>))]
public sealed record WouldBe : OpenStringEnum<WouldBe>
{
    private WouldBe(string value) : base(value)
    {
    }

    public static readonly WouldBe Allow = new("allow");

    public static readonly WouldBe Redact = new("redact");

    public static readonly WouldBe Ask = new("ask");

    public static readonly WouldBe Deny = new("deny");

    public TResult Match<TResult>(Func<TResult> onAllow,
        Func<TResult> onRedact,
        Func<TResult> onAsk,
        Func<TResult> onDeny,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == Redact => onRedact(),
            _ when this == Ask => onAsk(),
            _ when this == Deny => onDeny(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow, Action onRedact, Action onAsk, Action onDeny, Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == Redact) onRedact();
        else if (this == Ask) onAsk();
        else if (this == Deny) onDeny();
        else otherwise(Value);
    }
}
