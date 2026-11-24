using System;
using System.Text.Json.Serialization;
using Bitbucket.Core.Enum;

namespace Bitbucket.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<State2BitbucketWorkspacesApi>))]
public sealed record State2BitbucketWorkspacesApi : OpenStringEnum<State2BitbucketWorkspacesApi>
{
    private State2BitbucketWorkspacesApi(string value) : base(value)
    {
    }

    public static readonly State2BitbucketWorkspacesApi Open = new("OPEN");

    public static readonly State2BitbucketWorkspacesApi Merged = new("MERGED");

    public static readonly State2BitbucketWorkspacesApi Declined = new("DECLINED");

    public static readonly State2BitbucketWorkspacesApi Superseded = new("SUPERSEDED");

    public TResult Match<TResult>(Func<TResult> onOpen,
        Func<TResult> onMerged,
        Func<TResult> onDeclined,
        Func<TResult> onSuperseded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Open => onOpen(),
            _ when this == Merged => onMerged(),
            _ when this == Declined => onDeclined(),
            _ when this == Superseded => onSuperseded(),
            _ => otherwise(Value)
        };

    public void Match(Action onOpen, Action onMerged, Action onDeclined, Action onSuperseded, Action<string> otherwise)
    {
        if (this == Open) onOpen();
        else if (this == Merged) onMerged();
        else if (this == Declined) onDeclined();
        else if (this == Superseded) onSuperseded();
        else otherwise(Value);
    }
}
