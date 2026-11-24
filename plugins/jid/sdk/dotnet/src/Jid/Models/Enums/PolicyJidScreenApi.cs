using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PolicyJidScreenApi>))]
public sealed record PolicyJidScreenApi : OpenStringEnum<PolicyJidScreenApi>
{
    private PolicyJidScreenApi(string value) : base(value)
    {
    }

    public static readonly PolicyJidScreenApi Strict = new("strict");

    public static readonly PolicyJidScreenApi Balanced = new("balanced");

    public static readonly PolicyJidScreenApi Permissive = new("permissive");

    public TResult Match<TResult>(Func<TResult> onStrict,
        Func<TResult> onBalanced,
        Func<TResult> onPermissive,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Strict => onStrict(),
            _ when this == Balanced => onBalanced(),
            _ when this == Permissive => onPermissive(),
            _ => otherwise(Value)
        };

    public void Match(Action onStrict, Action onBalanced, Action onPermissive, Action<string> otherwise)
    {
        if (this == Strict) onStrict();
        else if (this == Balanced) onBalanced();
        else if (this == Permissive) onPermissive();
        else otherwise(Value);
    }
}
