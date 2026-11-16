using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Gives more information about the product flow that was used to create the resource. Finix retains the right to add additional enums for this field without it being a breaking change.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<CreatedViaTransfersAuthorizations>))]
public sealed record CreatedViaTransfersAuthorizations : OpenStringEnum<CreatedViaTransfersAuthorizations>
{
    private CreatedViaTransfersAuthorizations(string value) : base(value)
    {
    }

    public static readonly CreatedViaTransfersAuthorizations CardPresentAndroidApp = new("CARD_PRESENT_ANDROID_APP");

    public static readonly CreatedViaTransfersAuthorizations CardPresentAndroidAppManualEntry = new(
        "CARD_PRESENT_ANDROID_APP_MANUAL_ENTRY");

    public static readonly CreatedViaTransfersAuthorizations CardPresentAndroidD135Sdk = new(
        "CARD_PRESENT_ANDROID_D135_SDK");

    public static readonly CreatedViaTransfersAuthorizations CardPresentDeviceReaderSdk = new(
        "CARD_PRESENT_DEVICE_READER_SDK");

    public static readonly CreatedViaTransfersAuthorizations CardPresentIosApp = new("CARD_PRESENT_IOS_APP");

    public static readonly CreatedViaTransfersAuthorizations CardPresentIosAppManualEntry = new(
        "CARD_PRESENT_IOS_APP_MANUAL_ENTRY");

    public static readonly CreatedViaTransfersAuthorizations CardPresentIosD135Sdk = new("CARD_PRESENT_IOS_D135_SDK");

    public static readonly CreatedViaTransfersAuthorizations CardPresentIosTapToPay = new(
        "CARD_PRESENT_IOS_TAP_TO_PAY");

    public static readonly CreatedViaTransfersAuthorizations CardPresentIosTapToPaySdk = new(
        "CARD_PRESENT_IOS_TAP_TO_PAY_SDK");

    public static readonly CreatedViaTransfersAuthorizations CardPresentSemiIntegratedApi = new(
        "CARD_PRESENT_SEMI_INTEGRATED_API");

    public static readonly CreatedViaTransfersAuthorizations CardPresentStandalone = new("CARD_PRESENT_STANDALONE");

    public static readonly CreatedViaTransfersAuthorizations CardPresentStandaloneManualEntry = new(
        "CARD_PRESENT_STANDALONE_MANUAL_ENTRY");

    public static readonly CreatedViaTransfersAuthorizations CheckoutForm = new("CHECKOUT_FORM");

    public static readonly CreatedViaTransfersAuthorizations Cybersource = new("CYBERSOURCE");

    public static readonly CreatedViaTransfersAuthorizations DeviceOrder = new("DEVICE_ORDER");

    public static readonly CreatedViaTransfersAuthorizations PaymentLink = new("PAYMENT_LINK");

    public static readonly CreatedViaTransfersAuthorizations PayoutLink = new("PAYOUT_LINK");

    public static readonly CreatedViaTransfersAuthorizations PluginAdmoji = new("PLUGIN_ADMOJI");

    public static readonly CreatedViaTransfersAuthorizations PluginCheckoutChamp = new("PLUGIN_CHECKOUT_CHAMP");

    public static readonly CreatedViaTransfersAuthorizations PluginFyntek = new("PLUGIN_FYNTEK");

    public static readonly CreatedViaTransfersAuthorizations PluginGambleId = new("PLUGIN_GAMBLE_ID");

    public static readonly CreatedViaTransfersAuthorizations PluginGammaSweep = new("PLUGIN_GAMMA_SWEEP");

    public static readonly CreatedViaTransfersAuthorizations PluginGr4Vy = new("PLUGIN_GR4VY");

    public static readonly CreatedViaTransfersAuthorizations PluginHyperswitch = new("PLUGIN_HYPERSWITCH");

    public static readonly CreatedViaTransfersAuthorizations PluginLacore = new("PLUGIN_LACORE");

    public static readonly CreatedViaTransfersAuthorizations PluginPaysight = new("PLUGIN_PAYSIGHT");

    public static readonly CreatedViaTransfersAuthorizations PluginPryzr = new("PLUGIN_PRYZR");

    public static readonly CreatedViaTransfersAuthorizations PluginServman = new("PLUGIN_SERVMAN");

    public static readonly CreatedViaTransfersAuthorizations PluginSoapPay = new("PLUGIN_SOAP_PAY");

    public static readonly CreatedViaTransfersAuthorizations PluginStickyio = new("PLUGIN_STICKYIO");

    public static readonly CreatedViaTransfersAuthorizations PluginTagada = new("PLUGIN_TAGADA");

    public static readonly CreatedViaTransfersAuthorizations PluginWooCommerce = new("PLUGIN_WOO_COMMERCE");

    public static readonly CreatedViaTransfersAuthorizations PluginVrio = new("PLUGIN_VRIO");

    public static readonly CreatedViaTransfersAuthorizations Subscription = new("SUBSCRIPTION");

    public static readonly CreatedViaTransfersAuthorizations Unknown = new("UNKNOWN");

    public static readonly CreatedViaTransfersAuthorizations VirtualTerminal = new("VIRTUAL_TERMINAL");

    public TResult Match<TResult>(Func<TResult> onCardPresentAndroidApp,
        Func<TResult> onCardPresentAndroidAppManualEntry,
        Func<TResult> onCardPresentAndroidD135Sdk,
        Func<TResult> onCardPresentDeviceReaderSdk,
        Func<TResult> onCardPresentIosApp,
        Func<TResult> onCardPresentIosAppManualEntry,
        Func<TResult> onCardPresentIosD135Sdk,
        Func<TResult> onCardPresentIosTapToPay,
        Func<TResult> onCardPresentIosTapToPaySdk,
        Func<TResult> onCardPresentSemiIntegratedApi,
        Func<TResult> onCardPresentStandalone,
        Func<TResult> onCardPresentStandaloneManualEntry,
        Func<TResult> onCheckoutForm,
        Func<TResult> onCybersource,
        Func<TResult> onDeviceOrder,
        Func<TResult> onPaymentLink,
        Func<TResult> onPayoutLink,
        Func<TResult> onPluginAdmoji,
        Func<TResult> onPluginCheckoutChamp,
        Func<TResult> onPluginFyntek,
        Func<TResult> onPluginGambleId,
        Func<TResult> onPluginGammaSweep,
        Func<TResult> onPluginGr4Vy,
        Func<TResult> onPluginHyperswitch,
        Func<TResult> onPluginLacore,
        Func<TResult> onPluginPaysight,
        Func<TResult> onPluginPryzr,
        Func<TResult> onPluginServman,
        Func<TResult> onPluginSoapPay,
        Func<TResult> onPluginStickyio,
        Func<TResult> onPluginTagada,
        Func<TResult> onPluginWooCommerce,
        Func<TResult> onPluginVrio,
        Func<TResult> onSubscription,
        Func<TResult> onUnknown,
        Func<TResult> onVirtualTerminal,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == CardPresentAndroidApp => onCardPresentAndroidApp(),
            _ when this == CardPresentAndroidAppManualEntry => onCardPresentAndroidAppManualEntry(),
            _ when this == CardPresentAndroidD135Sdk => onCardPresentAndroidD135Sdk(),
            _ when this == CardPresentDeviceReaderSdk => onCardPresentDeviceReaderSdk(),
            _ when this == CardPresentIosApp => onCardPresentIosApp(),
            _ when this == CardPresentIosAppManualEntry => onCardPresentIosAppManualEntry(),
            _ when this == CardPresentIosD135Sdk => onCardPresentIosD135Sdk(),
            _ when this == CardPresentIosTapToPay => onCardPresentIosTapToPay(),
            _ when this == CardPresentIosTapToPaySdk => onCardPresentIosTapToPaySdk(),
            _ when this == CardPresentSemiIntegratedApi => onCardPresentSemiIntegratedApi(),
            _ when this == CardPresentStandalone => onCardPresentStandalone(),
            _ when this == CardPresentStandaloneManualEntry => onCardPresentStandaloneManualEntry(),
            _ when this == CheckoutForm => onCheckoutForm(),
            _ when this == Cybersource => onCybersource(),
            _ when this == DeviceOrder => onDeviceOrder(),
            _ when this == PaymentLink => onPaymentLink(),
            _ when this == PayoutLink => onPayoutLink(),
            _ when this == PluginAdmoji => onPluginAdmoji(),
            _ when this == PluginCheckoutChamp => onPluginCheckoutChamp(),
            _ when this == PluginFyntek => onPluginFyntek(),
            _ when this == PluginGambleId => onPluginGambleId(),
            _ when this == PluginGammaSweep => onPluginGammaSweep(),
            _ when this == PluginGr4Vy => onPluginGr4Vy(),
            _ when this == PluginHyperswitch => onPluginHyperswitch(),
            _ when this == PluginLacore => onPluginLacore(),
            _ when this == PluginPaysight => onPluginPaysight(),
            _ when this == PluginPryzr => onPluginPryzr(),
            _ when this == PluginServman => onPluginServman(),
            _ when this == PluginSoapPay => onPluginSoapPay(),
            _ when this == PluginStickyio => onPluginStickyio(),
            _ when this == PluginTagada => onPluginTagada(),
            _ when this == PluginWooCommerce => onPluginWooCommerce(),
            _ when this == PluginVrio => onPluginVrio(),
            _ when this == Subscription => onSubscription(),
            _ when this == Unknown => onUnknown(),
            _ when this == VirtualTerminal => onVirtualTerminal(),
            _ => otherwise(Value)
        };

    public void Match(Action onCardPresentAndroidApp,
        Action onCardPresentAndroidAppManualEntry,
        Action onCardPresentAndroidD135Sdk,
        Action onCardPresentDeviceReaderSdk,
        Action onCardPresentIosApp,
        Action onCardPresentIosAppManualEntry,
        Action onCardPresentIosD135Sdk,
        Action onCardPresentIosTapToPay,
        Action onCardPresentIosTapToPaySdk,
        Action onCardPresentSemiIntegratedApi,
        Action onCardPresentStandalone,
        Action onCardPresentStandaloneManualEntry,
        Action onCheckoutForm,
        Action onCybersource,
        Action onDeviceOrder,
        Action onPaymentLink,
        Action onPayoutLink,
        Action onPluginAdmoji,
        Action onPluginCheckoutChamp,
        Action onPluginFyntek,
        Action onPluginGambleId,
        Action onPluginGammaSweep,
        Action onPluginGr4Vy,
        Action onPluginHyperswitch,
        Action onPluginLacore,
        Action onPluginPaysight,
        Action onPluginPryzr,
        Action onPluginServman,
        Action onPluginSoapPay,
        Action onPluginStickyio,
        Action onPluginTagada,
        Action onPluginWooCommerce,
        Action onPluginVrio,
        Action onSubscription,
        Action onUnknown,
        Action onVirtualTerminal,
        Action<string> otherwise)
    {
        if (this == CardPresentAndroidApp) onCardPresentAndroidApp();
        else if (this == CardPresentAndroidAppManualEntry) onCardPresentAndroidAppManualEntry();
        else if (this == CardPresentAndroidD135Sdk) onCardPresentAndroidD135Sdk();
        else if (this == CardPresentDeviceReaderSdk) onCardPresentDeviceReaderSdk();
        else if (this == CardPresentIosApp) onCardPresentIosApp();
        else if (this == CardPresentIosAppManualEntry) onCardPresentIosAppManualEntry();
        else if (this == CardPresentIosD135Sdk) onCardPresentIosD135Sdk();
        else if (this == CardPresentIosTapToPay) onCardPresentIosTapToPay();
        else if (this == CardPresentIosTapToPaySdk) onCardPresentIosTapToPaySdk();
        else if (this == CardPresentSemiIntegratedApi) onCardPresentSemiIntegratedApi();
        else if (this == CardPresentStandalone) onCardPresentStandalone();
        else if (this == CardPresentStandaloneManualEntry) onCardPresentStandaloneManualEntry();
        else if (this == CheckoutForm) onCheckoutForm();
        else if (this == Cybersource) onCybersource();
        else if (this == DeviceOrder) onDeviceOrder();
        else if (this == PaymentLink) onPaymentLink();
        else if (this == PayoutLink) onPayoutLink();
        else if (this == PluginAdmoji) onPluginAdmoji();
        else if (this == PluginCheckoutChamp) onPluginCheckoutChamp();
        else if (this == PluginFyntek) onPluginFyntek();
        else if (this == PluginGambleId) onPluginGambleId();
        else if (this == PluginGammaSweep) onPluginGammaSweep();
        else if (this == PluginGr4Vy) onPluginGr4Vy();
        else if (this == PluginHyperswitch) onPluginHyperswitch();
        else if (this == PluginLacore) onPluginLacore();
        else if (this == PluginPaysight) onPluginPaysight();
        else if (this == PluginPryzr) onPluginPryzr();
        else if (this == PluginServman) onPluginServman();
        else if (this == PluginSoapPay) onPluginSoapPay();
        else if (this == PluginStickyio) onPluginStickyio();
        else if (this == PluginTagada) onPluginTagada();
        else if (this == PluginWooCommerce) onPluginWooCommerce();
        else if (this == PluginVrio) onPluginVrio();
        else if (this == Subscription) onSubscription();
        else if (this == Unknown) onUnknown();
        else if (this == VirtualTerminal) onVirtualTerminal();
        else otherwise(Value);
    }
}
