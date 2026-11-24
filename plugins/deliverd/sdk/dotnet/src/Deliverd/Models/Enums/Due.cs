using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// Return only schedules waiting on a publish
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Due>))]
public sealed record Due : OpenStringEnum<Due>
{
    private Due(string value) : base(value)
    {
    }

    public static readonly Due _1 = new("1");

    public TResult Match<TResult>(Func<TResult> on_1, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == _1 => on_1(),
            _ => otherwise(Value)
        };

    public void Match(Action on_1, Action<string> otherwise)
    {
        if (this == _1) on_1();
        else otherwise(Value);
    }
}
