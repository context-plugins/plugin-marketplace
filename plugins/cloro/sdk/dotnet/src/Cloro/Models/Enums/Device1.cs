using System;
using System.Text.Json.Serialization;
using Cloro.Core.Enum;

namespace Cloro.Models.Enums;

/// <summary>
/// Device type for search results
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Device1>))]
public sealed record Device1 : OpenStringEnum<Device1>
{
    private Device1(string value) : base(value)
    {
    }

    public static readonly Device1 Desktop = new("desktop");

    public static readonly Device1 Mobile = new("mobile");

    public TResult Match<TResult>(Func<TResult> onDesktop, Func<TResult> onMobile, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Desktop => onDesktop(),
            _ when this == Mobile => onMobile(),
            _ => otherwise(Value)
        };

    public void Match(Action onDesktop, Action onMobile, Action<string> otherwise)
    {
        if (this == Desktop) onDesktop();
        else if (this == Mobile) onMobile();
        else otherwise(Value);
    }
}
