using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PollResponsesExpandItems>))]
public sealed record PollResponsesExpandItems : OpenStringEnum<PollResponsesExpandItems>
{
    private PollResponsesExpandItems(string value) : base(value)
    {
    }

    public static readonly PollResponsesExpandItems Post = new("post");

    public TResult Match<TResult>(Func<TResult> onPost, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Post => onPost(),
            _ => otherwise(Value)
        };

    public void Match(Action onPost, Action<string> otherwise)
    {
        if (this == Post) onPost();
        else otherwise(Value);
    }
}
