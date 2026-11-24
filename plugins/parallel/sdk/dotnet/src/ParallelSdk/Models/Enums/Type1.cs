using System;
using System.Text.Json.Serialization;
using ParallelSdk.Core.Enum;

namespace ParallelSdk.Models.Enums;

/// <summary>
/// Type of MCP server being configured. Always <c>url</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type1>))]
public sealed record Type1 : OpenStringEnum<Type1>
{
    private Type1(string value) : base(value)
    {
    }

    public static readonly Type1 Url = new("url");

    public TResult Match<TResult>(Func<TResult> onUrl, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Url => onUrl(),
            _ => otherwise(Value)
        };

    public void Match(Action onUrl, Action<string> otherwise)
    {
        if (this == Url) onUrl();
        else otherwise(Value);
    }
}
