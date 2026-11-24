using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Platform identifier for invoice source.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<InvoicePlatform>))]
public sealed record InvoicePlatform : OpenStringEnum<InvoicePlatform>
{
    private InvoicePlatform(string value) : base(value)
    {
    }

    public static readonly InvoicePlatform GoogleCloud = new("google-cloud");

    public static readonly InvoicePlatform AmazonWebServices = new("amazon-web-services");

    public static readonly InvoicePlatform MicrosoftAzure = new("microsoft-azure");

    public static readonly InvoicePlatform GSuite = new("g-suite");

    public static readonly InvoicePlatform Office365 = new("office-365");

    public static readonly InvoicePlatform Superquery = new("superquery");

    public static readonly InvoicePlatform Looker = new("looker");

    public static readonly InvoicePlatform Navigator = new("navigator");

    public static readonly InvoicePlatform Solve = new("solve");

    public TResult Match<TResult>(Func<TResult> onGoogleCloud,
        Func<TResult> onAmazonWebServices,
        Func<TResult> onMicrosoftAzure,
        Func<TResult> onGSuite,
        Func<TResult> onOffice365,
        Func<TResult> onSuperquery,
        Func<TResult> onLooker,
        Func<TResult> onNavigator,
        Func<TResult> onSolve,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == GoogleCloud => onGoogleCloud(),
            _ when this == AmazonWebServices => onAmazonWebServices(),
            _ when this == MicrosoftAzure => onMicrosoftAzure(),
            _ when this == GSuite => onGSuite(),
            _ when this == Office365 => onOffice365(),
            _ when this == Superquery => onSuperquery(),
            _ when this == Looker => onLooker(),
            _ when this == Navigator => onNavigator(),
            _ when this == Solve => onSolve(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogleCloud,
        Action onAmazonWebServices,
        Action onMicrosoftAzure,
        Action onGSuite,
        Action onOffice365,
        Action onSuperquery,
        Action onLooker,
        Action onNavigator,
        Action onSolve,
        Action<string> otherwise)
    {
        if (this == GoogleCloud) onGoogleCloud();
        else if (this == AmazonWebServices) onAmazonWebServices();
        else if (this == MicrosoftAzure) onMicrosoftAzure();
        else if (this == GSuite) onGSuite();
        else if (this == Office365) onOffice365();
        else if (this == Superquery) onSuperquery();
        else if (this == Looker) onLooker();
        else if (this == Navigator) onNavigator();
        else if (this == Solve) onSolve();
        else otherwise(Value);
    }
}
