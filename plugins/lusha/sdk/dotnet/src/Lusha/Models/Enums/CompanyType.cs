using System;
using System.Text.Json.Serialization;
using Lusha.Core.Enum;

namespace Lusha.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CompanyType>))]
public sealed record CompanyType : OpenStringEnum<CompanyType>
{
    private CompanyType(string value) : base(value)
    {
    }

    public static readonly CompanyType Government = new("Government");

    public static readonly CompanyType PrivateCompany = new("Private Company");

    public static readonly CompanyType PublicCompany = new("Public Company");

    public static readonly CompanyType Educational = new("Educational");

    public static readonly CompanyType NonProfit = new("Non Profit");

    public static readonly CompanyType SelfEmployed = new("Self Employed");

    public TResult Match<TResult>(Func<TResult> onGovernment,
        Func<TResult> onPrivateCompany,
        Func<TResult> onPublicCompany,
        Func<TResult> onEducational,
        Func<TResult> onNonProfit,
        Func<TResult> onSelfEmployed,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Government => onGovernment(),
            _ when this == PrivateCompany => onPrivateCompany(),
            _ when this == PublicCompany => onPublicCompany(),
            _ when this == Educational => onEducational(),
            _ when this == NonProfit => onNonProfit(),
            _ when this == SelfEmployed => onSelfEmployed(),
            _ => otherwise(Value)
        };

    public void Match(Action onGovernment,
        Action onPrivateCompany,
        Action onPublicCompany,
        Action onEducational,
        Action onNonProfit,
        Action onSelfEmployed,
        Action<string> otherwise)
    {
        if (this == Government) onGovernment();
        else if (this == PrivateCompany) onPrivateCompany();
        else if (this == PublicCompany) onPublicCompany();
        else if (this == Educational) onEducational();
        else if (this == NonProfit) onNonProfit();
        else if (this == SelfEmployed) onSelfEmployed();
        else otherwise(Value);
    }
}
