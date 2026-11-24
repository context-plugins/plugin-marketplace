using System;
using System.Text.Json.Serialization;
using GoogleCloudTalentSolution.Core.Enum;

namespace GoogleCloudTalentSolution.Models.Enums;

/// <summary>
/// Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to Visibility.ACCOUNT_ONLY if not specified.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Visibility>))]
public sealed record Visibility : OpenStringEnum<Visibility>
{
    private Visibility(string value) : base(value)
    {
    }

    public static readonly Visibility VisibilityUnspecified = new("VISIBILITY_UNSPECIFIED");

    public static readonly Visibility AccountOnly = new("ACCOUNT_ONLY");

    public static readonly Visibility SharedWithGoogle = new("SHARED_WITH_GOOGLE");

    public static readonly Visibility SharedWithPublic = new("SHARED_WITH_PUBLIC");

    public TResult Match<TResult>(Func<TResult> onVisibilityUnspecified,
        Func<TResult> onAccountOnly,
        Func<TResult> onSharedWithGoogle,
        Func<TResult> onSharedWithPublic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == VisibilityUnspecified => onVisibilityUnspecified(),
            _ when this == AccountOnly => onAccountOnly(),
            _ when this == SharedWithGoogle => onSharedWithGoogle(),
            _ when this == SharedWithPublic => onSharedWithPublic(),
            _ => otherwise(Value)
        };

    public void Match(Action onVisibilityUnspecified,
        Action onAccountOnly,
        Action onSharedWithGoogle,
        Action onSharedWithPublic,
        Action<string> otherwise)
    {
        if (this == VisibilityUnspecified) onVisibilityUnspecified();
        else if (this == AccountOnly) onAccountOnly();
        else if (this == SharedWithGoogle) onSharedWithGoogle();
        else if (this == SharedWithPublic) onSharedWithPublic();
        else otherwise(Value);
    }
}
