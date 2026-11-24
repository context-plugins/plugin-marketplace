using System;
using System.Text.Json.Serialization;
using Lili.Core.Enum;

namespace Lili.Models.Enums;

/// <summary>
/// The version of the webhook
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VersionEnum>))]
public sealed record VersionEnum : OpenStringEnum<VersionEnum>
{
    private VersionEnum(string value) : base(value)
    {
    }

    public static readonly VersionEnum V10 = new("V1_0");

    public static readonly VersionEnum V20 = new("V2_0");

    public TResult Match<TResult>(Func<TResult> onV10, Func<TResult> onV20, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == V10 => onV10(),
            _ when this == V20 => onV20(),
            _ => otherwise(Value)
        };

    public void Match(Action onV10, Action onV20, Action<string> otherwise)
    {
        if (this == V10) onV10();
        else if (this == V20) onV20();
        else otherwise(Value);
    }
}
