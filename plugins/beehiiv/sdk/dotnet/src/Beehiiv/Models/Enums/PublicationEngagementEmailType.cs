using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicationEngagementEmailType>))]
public sealed record PublicationEngagementEmailType : OpenStringEnum<PublicationEngagementEmailType>
{
    private PublicationEngagementEmailType(string value) : base(value)
    {
    }

    public static readonly PublicationEngagementEmailType All = new("all");

    public static readonly PublicationEngagementEmailType Post = new("post");

    public static readonly PublicationEngagementEmailType Message = new("message");

    public TResult Match<TResult>(Func<TResult> onAll,
        Func<TResult> onPost,
        Func<TResult> onMessage,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == All => onAll(),
            _ when this == Post => onPost(),
            _ when this == Message => onMessage(),
            _ => otherwise(Value)
        };

    public void Match(Action onAll, Action onPost, Action onMessage, Action<string> otherwise)
    {
        if (this == All) onAll();
        else if (this == Post) onPost();
        else if (this == Message) onMessage();
        else otherwise(Value);
    }
}
