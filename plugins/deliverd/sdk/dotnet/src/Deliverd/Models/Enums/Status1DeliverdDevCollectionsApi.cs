using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status1DeliverdDevCollectionsApi>))]
public sealed record Status1DeliverdDevCollectionsApi : OpenStringEnum<Status1DeliverdDevCollectionsApi>
{
    private Status1DeliverdDevCollectionsApi(string value) : base(value)
    {
    }

    public static readonly Status1DeliverdDevCollectionsApi Pending = new("pending");

    public static readonly Status1DeliverdDevCollectionsApi Submitted = new("submitted");

    public TResult Match<TResult>(Func<TResult> onPending,
        Func<TResult> onSubmitted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Pending => onPending(),
            _ when this == Submitted => onSubmitted(),
            _ => otherwise(Value)
        };

    public void Match(Action onPending, Action onSubmitted, Action<string> otherwise)
    {
        if (this == Pending) onPending();
        else if (this == Submitted) onSubmitted();
        else otherwise(Value);
    }
}
