using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Connected cloud account type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type6>))]
public sealed record Type6 : OpenStringEnum<Type6>
{
    private Type6(string value) : base(value)
    {
    }

    public static readonly Type6 Aws = new("AWS");

    public static readonly Type6 Gcp = new("GCP");

    public static readonly Type6 Azure = new("AZURE");

    public TResult Match<TResult>(Func<TResult> onAws,
        Func<TResult> onGcp,
        Func<TResult> onAzure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Aws => onAws(),
            _ when this == Gcp => onGcp(),
            _ when this == Azure => onAzure(),
            _ => otherwise(Value)
        };

    public void Match(Action onAws, Action onGcp, Action onAzure, Action<string> otherwise)
    {
        if (this == Aws) onAws();
        else if (this == Gcp) onGcp();
        else if (this == Azure) onAzure();
        else otherwise(Value);
    }
}
