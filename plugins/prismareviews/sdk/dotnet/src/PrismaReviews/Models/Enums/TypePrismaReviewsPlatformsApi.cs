using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypePrismaReviewsPlatformsApi>))]
public sealed record TypePrismaReviewsPlatformsApi : OpenStringEnum<TypePrismaReviewsPlatformsApi>
{
    private TypePrismaReviewsPlatformsApi(string value) : base(value)
    {
    }

    public static readonly TypePrismaReviewsPlatformsApi Text = new("text");

    public static readonly TypePrismaReviewsPlatformsApi Secret = new("secret");

    public static readonly TypePrismaReviewsPlatformsApi Textarea = new("textarea");

    public static readonly TypePrismaReviewsPlatformsApi List = new("list");

    public static readonly TypePrismaReviewsPlatformsApi Url = new("url");

    public TResult Match<TResult>(Func<TResult> onText,
        Func<TResult> onSecret,
        Func<TResult> onTextarea,
        Func<TResult> onList,
        Func<TResult> onUrl,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Text => onText(),
            _ when this == Secret => onSecret(),
            _ when this == Textarea => onTextarea(),
            _ when this == List => onList(),
            _ when this == Url => onUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onText,
        Action onSecret,
        Action onTextarea,
        Action onList,
        Action onUrl,
        Action<string> otherwise)
    {
        if (this == Text) onText();
        else if (this == Secret) onSecret();
        else if (this == Textarea) onTextarea();
        else if (this == List) onList();
        else if (this == Url) onUrl();
        else otherwise(Value);
    }
}
