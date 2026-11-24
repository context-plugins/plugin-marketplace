using System;
using System.Text.Json.Serialization;
using Soda.Core.Enum;

namespace Soda.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<PublicApiRunnerTypeDto>))]
public sealed record PublicApiRunnerTypeDto : OpenStringEnum<PublicApiRunnerTypeDto>
{
    private PublicApiRunnerTypeDto(string value) : base(value)
    {
    }

    public static readonly PublicApiRunnerTypeDto SelfHosted = new("SELF_HOSTED");

    public static readonly PublicApiRunnerTypeDto SodaHosted = new("SODA_HOSTED");

    public TResult Match<TResult>(Func<TResult> onSelfHosted,
        Func<TResult> onSodaHosted,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SelfHosted => onSelfHosted(),
            _ when this == SodaHosted => onSodaHosted(),
            _ => otherwise(Value)
        };

    public void Match(Action onSelfHosted, Action onSodaHosted, Action<string> otherwise)
    {
        if (this == SelfHosted) onSelfHosted();
        else if (this == SodaHosted) onSodaHosted();
        else otherwise(Value);
    }
}
