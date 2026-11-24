using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Provider resource scope for the quota.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeDoiTServiceQuotasApi>))]
public sealed record TypeDoiTServiceQuotasApi : OpenStringEnum<TypeDoiTServiceQuotasApi>
{
    private TypeDoiTServiceQuotasApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTServiceQuotasApi Account = new("account");

    public static readonly TypeDoiTServiceQuotasApi Project = new("project");

    public TResult Match<TResult>(Func<TResult> onAccount, Func<TResult> onProject, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Account => onAccount(),
            _ when this == Project => onProject(),
            _ => otherwise(Value)
        };

    public void Match(Action onAccount, Action onProject, Action<string> otherwise)
    {
        if (this == Account) onAccount();
        else if (this == Project) onProject();
        else otherwise(Value);
    }
}
