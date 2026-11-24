using System;
using System.Text.Json.Serialization;
using Rendex.Core.Enum;

namespace Rendex.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Status3>))]
public sealed record Status3 : OpenStringEnum<Status3>
{
    private Status3(string value) : base(value)
    {
    }

    public static readonly Status3 Queued = new("queued");

    public TResult Match<TResult>(Func<TResult> onQueued, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queued => onQueued(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueued, Action<string> otherwise)
    {
        if (this == Queued) onQueued();
        else otherwise(Value);
    }
}
