using System;
using System.Text.Json.Serialization;
using SerpApi.Core.Enum;

namespace SerpApi.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Output>))]
public sealed record Output : OpenStringEnum<Output>
{
    private Output(string value) : base(value)
    {
    }

    public static readonly Output Json = new("json");

    public static readonly Output Html = new("html");

    public TResult Match<TResult>(Func<TResult> onJson, Func<TResult> onHtml, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Json => onJson(),
            _ when this == Html => onHtml(),
            _ => otherwise(Value)
        };

    public void Match(Action onJson, Action onHtml, Action<string> otherwise)
    {
        if (this == Json) onJson();
        else if (this == Html) onHtml();
        else otherwise(Value);
    }
}
