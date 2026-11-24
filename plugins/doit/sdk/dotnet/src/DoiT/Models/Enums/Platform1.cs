using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The cloud platform.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Platform1>))]
public sealed record Platform1 : OpenStringEnum<Platform1>
{
    private Platform1(string value) : base(value)
    {
    }

    public static readonly Platform1 GoogleCloud = new("google-cloud");

    public static readonly Platform1 AmazonWebServices = new("amazon-web-services");

    public TResult Match<TResult>(Func<TResult> onGoogleCloud,
        Func<TResult> onAmazonWebServices,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GoogleCloud => onGoogleCloud(),
            _ when this == AmazonWebServices => onAmazonWebServices(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogleCloud, Action onAmazonWebServices, Action<string> otherwise)
    {
        if (this == GoogleCloud) onGoogleCloud();
        else if (this == AmazonWebServices) onAmazonWebServices();
        else otherwise(Value);
    }
}
