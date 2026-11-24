using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

/// <summary>
/// New classification behavior. Accepts EVENT, MENTIONS, or TOPIC.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ClassificationType1>))]
public sealed record ClassificationType1 : OpenStringEnum<ClassificationType1>
{
    private ClassificationType1(string value) : base(value)
    {
    }

    public static readonly ClassificationType1 Event = new("EVENT");

    public static readonly ClassificationType1 Mentions = new("MENTIONS");

    public static readonly ClassificationType1 Topic = new("TOPIC");

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
