using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// How matching content is classified: EVENT, MENTIONS, or TOPIC.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClassificationType>))]
public sealed record ClassificationType : OpenStringEnum<ClassificationType>
{
    private ClassificationType(string value) : base(value)
    {
    }

    public static readonly ClassificationType Event = new("EVENT");

    public static readonly ClassificationType Mentions = new("MENTIONS");

    public static readonly ClassificationType Topic = new("TOPIC");

    public TResult Match<TResult>(Func<TResult> onEvent,
        Func<TResult> onMentions,
        Func<TResult> onTopic,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Event => onEvent(),
            _ when this == Mentions => onMentions(),
            _ when this == Topic => onTopic(),
            _ => otherwise(Value)
        };

    public void Match(Action onEvent, Action onMentions, Action onTopic, Action<string> otherwise)
    {
        if (this == Event) onEvent();
        else if (this == Mentions) onMentions();
        else if (this == Topic) onTopic();
        else otherwise(Value);
    }
}
