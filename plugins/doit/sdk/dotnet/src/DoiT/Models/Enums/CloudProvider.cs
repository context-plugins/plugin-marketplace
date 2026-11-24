using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// The cloud provider associated with the commitment.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CloudProvider>))]
public sealed record CloudProvider : OpenStringEnum<CloudProvider>
{
    private CloudProvider(string value) : base(value)
    {
    }

    public static readonly CloudProvider GoogleCloud = new("google-cloud");

    public static readonly CloudProvider AmazonWebServices = new("amazon-web-services");

    public static readonly CloudProvider MicrosoftAzure = new("microsoft-azure");

    public TResult Match<TResult>(Func<TResult> onGoogleCloud,
        Func<TResult> onAmazonWebServices,
        Func<TResult> onMicrosoftAzure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GoogleCloud => onGoogleCloud(),
            _ when this == AmazonWebServices => onAmazonWebServices(),
            _ when this == MicrosoftAzure => onMicrosoftAzure(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogleCloud,
        Action onAmazonWebServices,
        Action onMicrosoftAzure,
        Action<string> otherwise)
    {
        if (this == GoogleCloud) onGoogleCloud();
        else if (this == AmazonWebServices) onAmazonWebServices();
        else if (this == MicrosoftAzure) onMicrosoftAzure();
        else otherwise(Value);
    }
}
