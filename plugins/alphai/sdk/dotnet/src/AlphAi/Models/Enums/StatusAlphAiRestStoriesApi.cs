using System;
using System.Text.Json.Serialization;
using AlphAi.Core.Enum;

namespace AlphAi.Models.Enums;

/// <summary>
/// <c>found</c>: <c>story</c> is filled. <c>merged</c>: this story was folded into another one, <c>redirect_to</c> is its id. <c>not_a_story</c>: the id belongs to an article only one publisher carried, <c>article</c> names it. (An unknown id is a 404, not a status.)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<StatusAlphAiRestStoriesApi>))]
public sealed record StatusAlphAiRestStoriesApi : OpenStringEnum<StatusAlphAiRestStoriesApi>
{
    private StatusAlphAiRestStoriesApi(string value) : base(value)
    {
    }

    public static readonly StatusAlphAiRestStoriesApi Found = new("found");

    public static readonly StatusAlphAiRestStoriesApi Merged = new("merged");

    public static readonly StatusAlphAiRestStoriesApi NotAStory = new("not_a_story");

    public TResult Match<TResult>(Func<TResult> onFound,
        Func<TResult> onMerged,
        Func<TResult> onNotAStory,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Found => onFound(),
            _ when this == Merged => onMerged(),
            _ when this == NotAStory => onNotAStory(),
            _ => otherwise(Value)
        };

    public void Match(Action onFound, Action onMerged, Action onNotAStory, Action<string> otherwise)
    {
        if (this == Found) onFound();
        else if (this == Merged) onMerged();
        else if (this == NotAStory) onNotAStory();
        else otherwise(Value);
    }
}
