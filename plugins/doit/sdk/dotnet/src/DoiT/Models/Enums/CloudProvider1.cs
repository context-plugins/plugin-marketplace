using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<CloudProvider1>))]
public sealed record CloudProvider1 : OpenStringEnum<CloudProvider1>
{
    private CloudProvider1(string value) : base(value)
    {
    }

    public static readonly CloudProvider1 Aws = new("aws");

    public static readonly CloudProvider1 Gcp = new("gcp");

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
