using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

/// <summary>
/// Controls the rules for forking repositories within this workspace.
/// <list type="bullet">
///   <item><description><b>allow_forks</b>: unrestricted forking</description></item>
///   <item><description><b>internal_only</b>: prevents forking of private repositories outside the workspace or to public repositories</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ForkingMode>))]
public sealed record ForkingMode : OpenStringEnum<ForkingMode>
{
    private ForkingMode(string value) : base(value)
    {
    }

    public static readonly ForkingMode AllowForks = new("allow_forks");

    public static readonly ForkingMode InternalOnly = new("internal_only");

    public TResult Match<TResult>(Func<TResult> onAllowForks,
        Func<TResult> onInternalOnly,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == AllowForks => onAllowForks(),
            _ when this == InternalOnly => onInternalOnly(),
            _ => otherwise(Value)
        };

    public void Match(Action onAllowForks, Action onInternalOnly, Action<string> otherwise)
    {
        if (this == AllowForks) onAllowForks();
        else if (this == InternalOnly) onInternalOnly();
        else otherwise(Value);
    }
}
