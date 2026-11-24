using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

/// <summary>
/// The email type filter applied to the engagement metrics. Defaults to <c>all</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PublicationEngagementEmailType1>))]
public sealed record PublicationEngagementEmailType1 : OpenStringEnum<PublicationEngagementEmailType1>
{
    private PublicationEngagementEmailType1(string value) : base(value)
    {
    }

    public static readonly PublicationEngagementEmailType1 All = new("all");

    public static readonly PublicationEngagementEmailType1 Post = new("post");

    public static readonly PublicationEngagementEmailType1 Message = new("message");

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
