using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// <c>api</c>: Prisma publishes replies. <c>read</c>: read only.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reply>))]
public sealed record Reply : OpenStringEnum<Reply>
{
    private Reply(string value) : base(value)
    {
    }

    public static readonly Reply Api = new("api");

    public static readonly Reply Read = new("read");

    public TResult Match<TResult>(Func<TResult> onApi, Func<TResult> onRead, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Api => onApi(),
            _ when this == Read => onRead(),
            _ => otherwise(Value)
        };

    public void Match(Action onApi, Action onRead, Action<string> otherwise)
    {
        if (this == Api) onApi();
        else if (this == Read) onRead();
        else otherwise(Value);
    }
}
