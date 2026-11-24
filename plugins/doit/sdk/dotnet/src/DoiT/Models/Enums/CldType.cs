using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Cloud account type.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CldType>))]
public sealed record CldType : OpenStringEnum<CldType>
{
    private CldType(string value) : base(value)
    {
    }

    public static readonly CldType Aws = new("AWS");

    public static readonly CldType Gcp = new("GCP");

    public static readonly CldType Azure = new("AZURE");

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
