using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of proxy rule.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeAwsCodeBuildFleetApi>))]
public sealed record TypeAwsCodeBuildFleetApi : OpenStringEnum<TypeAwsCodeBuildFleetApi>
{
    private TypeAwsCodeBuildFleetApi(string value) : base(value)
    {
    }

    public static readonly TypeAwsCodeBuildFleetApi Domain = new("DOMAIN");

    public static readonly TypeAwsCodeBuildFleetApi Ip = new("IP");

    public TResult Match<TResult>(Func<TResult> onDomain, Func<TResult> onIp, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Domain => onDomain(),
            _ when this == Ip => onIp(),
            _ => otherwise(Value)
        };

    public void Match(Action onDomain, Action onIp, Action<string> otherwise)
    {
        if (this == Domain) onDomain();
        else if (this == Ip) onIp();
        else otherwise(Value);
    }
}
