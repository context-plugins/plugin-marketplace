using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Effect>))]
public sealed record Effect : OpenStringEnum<Effect>
{
    private Effect(string value) : base(value)
    {
    }

    public static readonly Effect Allow = new("allow");

    public static readonly Effect Deny = new("deny");

    public static readonly Effect RequireHuman = new("require_human");

    public static readonly Effect RequireReview = new("require_review");

    public TResult Match<TResult>(Func<TResult> onAllow,
        Func<TResult> onDeny,
        Func<TResult> onRequireHuman,
        Func<TResult> onRequireReview,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Allow => onAllow(),
            _ when this == Deny => onDeny(),
            _ when this == RequireHuman => onRequireHuman(),
            _ when this == RequireReview => onRequireReview(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllow,
        Action onDeny,
        Action onRequireHuman,
        Action onRequireReview,
        Action<string> otherwise)
    {
        if (this == Allow) onAllow();
        else if (this == Deny) onDeny();
        else if (this == RequireHuman) onRequireHuman();
        else if (this == RequireReview) onRequireReview();
        else otherwise(Value);
    }
}
