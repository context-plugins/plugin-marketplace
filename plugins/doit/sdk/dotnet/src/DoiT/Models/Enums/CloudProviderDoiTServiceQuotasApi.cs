using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Cloud provider that owns the quota.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CloudProviderDoiTServiceQuotasApi>))]
public sealed record CloudProviderDoiTServiceQuotasApi : OpenStringEnum<CloudProviderDoiTServiceQuotasApi>
{
    private CloudProviderDoiTServiceQuotasApi(string value) : base(value)
    {
    }

    public static readonly CloudProviderDoiTServiceQuotasApi Aws = new("aws");

    public static readonly CloudProviderDoiTServiceQuotasApi Gcp = new("gcp");

    public TResult Match<TResult>(Func<TResult> onAws, Func<TResult> onGcp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aws => onAws(),
            _ when this == Gcp => onGcp(),
            _ => otherwise(Value)
        };

    public void Match(Action onAws, Action onGcp, Action<string> otherwise)
    {
        if (this == Aws) onAws();
        else if (this == Gcp) onGcp();
        else otherwise(Value);
    }
}
