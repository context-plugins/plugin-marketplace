using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Cloud the scope belongs to.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Cloud>))]
public sealed record Cloud : OpenStringEnum<Cloud>
{
    private Cloud(string value) : base(value)
    {
    }

    public static readonly Cloud Aws = new("aws");

    public static readonly Cloud Gcp = new("gcp");

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
