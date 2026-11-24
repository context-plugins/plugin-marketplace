using System;
using System.Text.Json.Serialization;
using Perigon.Core.Enum;

namespace Perigon.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<ClassificationType3>))]
public sealed record ClassificationType3 : OpenStringEnum<ClassificationType3>
{
    private ClassificationType3(string value) : base(value)
    {
    }

    public static readonly ClassificationType3 Event = new("EVENT");

    public static readonly ClassificationType3 Mentions = new("MENTIONS");

    public static readonly ClassificationType3 Topic = new("TOPIC");

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
