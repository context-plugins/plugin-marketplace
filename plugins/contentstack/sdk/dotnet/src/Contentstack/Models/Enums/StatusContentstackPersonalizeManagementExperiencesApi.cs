using System;
using System.Text.Json.Serialization;
using Contentstack.Core.Enum;

namespace Contentstack.Models.Enums;

/// <summary>
/// Current status of the experience.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusContentstackPersonalizeManagementExperiencesApi>))]
public sealed record StatusContentstackPersonalizeManagementExperiencesApi : OpenStringEnum<StatusContentstackPersonalizeManagementExperiencesApi>
{
    private StatusContentstackPersonalizeManagementExperiencesApi(string value) : base(value)
    {
    }

    public static readonly StatusContentstackPersonalizeManagementExperiencesApi Draft = new("DRAFT");

    public static readonly StatusContentstackPersonalizeManagementExperiencesApi Active = new("ACTIVE");

    public static readonly StatusContentstackPersonalizeManagementExperiencesApi Inactive = new("INACTIVE");

    public static readonly StatusContentstackPersonalizeManagementExperiencesApi Ended = new("ENDED");

    public TResult Match<TResult>(Func<TResult> onDraft,
        Func<TResult> onActive,
        Func<TResult> onInactive,
        Func<TResult> onEnded,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Draft => onDraft(),
            _ when this == Active => onActive(),
            _ when this == Inactive => onInactive(),
            _ when this == Ended => onEnded(),
            _ => otherwise(Value)
        };

    public void Match(Action onDraft, Action onActive, Action onInactive, Action onEnded, Action<string> otherwise)
    {
        if (this == Draft) onDraft();
        else if (this == Active) onActive();
        else if (this == Inactive) onInactive();
        else if (this == Ended) onEnded();
        else otherwise(Value);
    }
}
