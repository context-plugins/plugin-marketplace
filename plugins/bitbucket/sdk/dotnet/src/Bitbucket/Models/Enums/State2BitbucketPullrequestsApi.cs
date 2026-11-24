using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State2BitbucketPullrequestsApi>))]
public sealed record State2BitbucketPullrequestsApi : OpenStringEnum<State2BitbucketPullrequestsApi>
{
    private State2BitbucketPullrequestsApi(string value) : base(value)
    {
    }

    public static readonly State2BitbucketPullrequestsApi Resolved = new("RESOLVED");

    public static readonly State2BitbucketPullrequestsApi Unresolved = new("UNRESOLVED");

    public TResult Match<TResult>(Func<TResult> onResolved,
        Func<TResult> onUnresolved,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Resolved => onResolved(),
            _ when this == Unresolved => onUnresolved(),
            _ => otherwise(Value)
        };

    public void Match(Action onResolved, Action onUnresolved, Action<string> otherwise)
    {
        if (this == Resolved) onResolved();
        else if (this == Unresolved) onUnresolved();
        else otherwise(Value);
    }
}
