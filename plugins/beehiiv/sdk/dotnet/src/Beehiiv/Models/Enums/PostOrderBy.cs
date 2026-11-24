using System;
using System.Text.Json.Serialization;
using Beehiiv.Core.Enum;

namespace Beehiiv.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PostOrderBy>))]
public sealed record PostOrderBy : OpenStringEnum<PostOrderBy>
{
    private PostOrderBy(string value) : base(value)
    {
    }

    public static readonly PostOrderBy Created = new("created");

    public static readonly PostOrderBy PublishDate = new("publish_date");

    public static readonly PostOrderBy DisplayedDate = new("displayed_date");

    public TResult Match<TResult>(Func<TResult> onCreated,
        Func<TResult> onPublishDate,
        Func<TResult> onDisplayedDate,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Created => onCreated(),
            _ when this == PublishDate => onPublishDate(),
            _ when this == DisplayedDate => onDisplayedDate(),
            _ => otherwise(Value)
        };

    public void Match(Action onCreated, Action onPublishDate, Action onDisplayedDate, Action<string> otherwise)
    {
        if (this == Created) onCreated();
        else if (this == PublishDate) onPublishDate();
        else if (this == DisplayedDate) onDisplayedDate();
        else otherwise(Value);
    }
}
