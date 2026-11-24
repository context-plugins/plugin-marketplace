using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

/// <summary>
/// Alert type for ALERT posts.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<AlertType>))]
public sealed record AlertType : OpenStringEnum<AlertType>
{
    private AlertType(string value) : base(value)
    {
    }

    public static readonly AlertType Covid19 = new("COVID_19");

    public TResult Match<TResult>(Func<TResult> onCovid19, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Covid19 => onCovid19(),
            _ => otherwise(Value)
        };

    public void Match(Action onCovid19, Action<string> otherwise)
    {
        if (this == Covid19) onCovid19();
        else otherwise(Value);
    }
}
