using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<UserAgent>))]
public sealed record UserAgent : OpenStringEnum<UserAgent>
{
    private UserAgent(string value) : base(value)
    {
    }

    public static readonly UserAgent PrismaWebhooks1 = new("Prisma-Webhooks/1");

    public TResult Match<TResult>(Func<TResult> onPrismaWebhooks1, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PrismaWebhooks1 => onPrismaWebhooks1(),
            _ => otherwise(Value)
        };

    public void Match(Action onPrismaWebhooks1, Action<string> otherwise)
    {
        if (this == PrismaWebhooks1) onPrismaWebhooks1();
        else otherwise(Value);
    }
}
