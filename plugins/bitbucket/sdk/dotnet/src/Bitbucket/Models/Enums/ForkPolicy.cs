using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// Controls the rules for forking this repository.
/// <para>
/// * <b>allow_forks</b>: unrestricted forking
/// * <b>no_public_forks</b>: restrict forking to private forks (forks cannot
///   be made public later)
/// * <b>no_forks</b>: deny all forking
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ForkPolicy>))]
public sealed record ForkPolicy : OpenStringEnum<ForkPolicy>
{
    private ForkPolicy(string value) : base(value)
    {
    }

    public static readonly ForkPolicy AllowForks = new("allow_forks");

    public static readonly ForkPolicy NoPublicForks = new("no_public_forks");

    public static readonly ForkPolicy NoForks = new("no_forks");

    public TResult Match<TResult>(Func<TResult> onAllowForks,
        Func<TResult> onNoPublicForks,
        Func<TResult> onNoForks,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllowForks => onAllowForks(),
            _ when this == NoPublicForks => onNoPublicForks(),
            _ when this == NoForks => onNoForks(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowForks, Action onNoPublicForks, Action onNoForks, Action<string> otherwise)
    {
        if (this == AllowForks) onAllowForks();
        else if (this == NoPublicForks) onNoPublicForks();
        else if (this == NoForks) onNoForks();
        else otherwise(Value);
    }
}
