using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Ticket platform.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Platform2>))]
public sealed record Platform2 : OpenStringEnum<Platform2>
{
    private Platform2(string value) : base(value)
    {
    }

    public static readonly Platform2 Doit = new("doit");

    public static readonly Platform2 GoogleCloudPlatform = new("google_cloud_platform");

    public static readonly Platform2 AmazonWebServices = new("amazon_web_services");

    public static readonly Platform2 MicrosoftAzure = new("microsoft_azure");

    public TResult Match<TResult>(Func<TResult> onDoit,
        Func<TResult> onGoogleCloudPlatform,
        Func<TResult> onAmazonWebServices,
        Func<TResult> onMicrosoftAzure,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Doit => onDoit(),
            _ when this == GoogleCloudPlatform => onGoogleCloudPlatform(),
            _ when this == AmazonWebServices => onAmazonWebServices(),
            _ when this == MicrosoftAzure => onMicrosoftAzure(),
            _ => otherwise(Value)
        };

    public void Match(Action onDoit,
        Action onGoogleCloudPlatform,
        Action onAmazonWebServices,
        Action onMicrosoftAzure,
        Action<string> otherwise)
    {
        if (this == Doit) onDoit();
        else if (this == GoogleCloudPlatform) onGoogleCloudPlatform();
        else if (this == AmazonWebServices) onAmazonWebServices();
        else if (this == MicrosoftAzure) onMicrosoftAzure();
        else otherwise(Value);
    }
}
