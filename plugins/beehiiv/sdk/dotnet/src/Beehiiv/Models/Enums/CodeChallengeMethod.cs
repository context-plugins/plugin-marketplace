using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The PKCE code challenge method.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CodeChallengeMethod>))]
public sealed record CodeChallengeMethod : OpenStringEnum<CodeChallengeMethod>
{
    private CodeChallengeMethod(string value) : base(value)
    {
    }

    public static readonly CodeChallengeMethod Plain = new("plain");

    public static readonly CodeChallengeMethod S256 = new("S256");

    public TResult Match<TResult>(Func<TResult> onPlain, Func<TResult> onS256, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Plain => onPlain(),
            _ when this == S256 => onS256(),
            _ => otherwise(Value)
        };

    public void Match(Action onPlain, Action onS256, Action<string> otherwise)
    {
        if (this == Plain) onPlain();
        else if (this == S256) onS256();
        else otherwise(Value);
    }
}
