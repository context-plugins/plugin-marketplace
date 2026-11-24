using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<NotificationCustomizationTypeDto>))]
public sealed record NotificationCustomizationTypeDto : OpenStringEnum<NotificationCustomizationTypeDto>
{
    private NotificationCustomizationTypeDto(string value) : base(value)
    {
    }

    public static readonly NotificationCustomizationTypeDto Rich = new("rich");

    public static readonly NotificationCustomizationTypeDto Minimal = new("minimal");

    public TResult Match<TResult>(Func<TResult> onRich, Func<TResult> onMinimal, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Rich => onRich(),
            _ when this == Minimal => onMinimal(),
            _ => otherwise(Value)
        };

    public void Match(Action onRich, Action onMinimal, Action<string> otherwise)
    {
        if (this == Rich) onRich();
        else if (this == Minimal) onMinimal();
        else otherwise(Value);
    }
}
