using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// Only this platform. Without it, the owner chooses among the platforms of your plan.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlatformId2>))]
public sealed record PlatformId2 : OpenStringEnum<PlatformId2>
{
    private PlatformId2(string value) : base(value)
    {
    }

    public static readonly PlatformId2 Google = new("google");

    public static readonly PlatformId2 AppStore = new("app_store");

    public static readonly PlatformId2 GooglePlay = new("google_play");

    public static readonly PlatformId2 JudgeMe = new("judge_me");

    public static readonly PlatformId2 Trustpilot = new("trustpilot");

    public static readonly PlatformId2 GoogleMaps = new("google_maps");

    public static readonly PlatformId2 Yelp = new("yelp");

    public static readonly PlatformId2 Tripadvisor = new("tripadvisor");

    public static readonly PlatformId2 Booking = new("booking");

    public static readonly PlatformId2 Yotpo = new("yotpo");

    public static readonly PlatformId2 ReviewsIo = new("reviews_io");

    public static readonly PlatformId2 G2 = new("g2");

    public static readonly PlatformId2 Ebay = new("ebay");

    public static readonly PlatformId2 Etsy = new("etsy");

    public static readonly PlatformId2 Steam = new("steam");

    public static readonly PlatformId2 Okendo = new("okendo");

    public static readonly PlatformId2 Feefo = new("feefo");

    public static readonly PlatformId2 TrustedShops = new("trusted_shops");

    public static readonly PlatformId2 Ekomi = new("ekomi");

    public static readonly PlatformId2 Loox = new("loox");

    public static readonly PlatformId2 ProvenExpert = new("proven_expert");

    public static readonly PlatformId2 ShopperApproved = new("shopper_approved");

    public static readonly PlatformId2 Wordpress = new("wordpress");

    public static readonly PlatformId2 Appexchange = new("appexchange");

    public static readonly PlatformId2 Facebook = new("facebook");

    public static readonly PlatformId2 Opentable = new("opentable");

    public static readonly PlatformId2 Doordash = new("doordash");

    public static readonly PlatformId2 Angi = new("angi");

    public static readonly PlatformId2 Checkatrade = new("checkatrade");

    public static readonly PlatformId2 Avvo = new("avvo");

    public static readonly PlatformId2 Capterra = new("capterra");

    public static readonly PlatformId2 Apartments = new("apartments");

    public static readonly PlatformId2 Gartner = new("gartner");

    public static readonly PlatformId2 Healthgrades = new("healthgrades");

    public static readonly PlatformId2 Vitals = new("vitals");

    public static readonly PlatformId2 Classpass = new("classpass");

    public TResult Match<TResult>(Func<TResult> onGoogle,
        Func<TResult> onAppStore,
        Func<TResult> onGooglePlay,
        Func<TResult> onJudgeMe,
        Func<TResult> onTrustpilot,
        Func<TResult> onGoogleMaps,
        Func<TResult> onYelp,
        Func<TResult> onTripadvisor,
        Func<TResult> onBooking,
        Func<TResult> onYotpo,
        Func<TResult> onReviewsIo,
        Func<TResult> onG2,
        Func<TResult> onEbay,
        Func<TResult> onEtsy,
        Func<TResult> onSteam,
        Func<TResult> onOkendo,
        Func<TResult> onFeefo,
        Func<TResult> onTrustedShops,
        Func<TResult> onEkomi,
        Func<TResult> onLoox,
        Func<TResult> onProvenExpert,
        Func<TResult> onShopperApproved,
        Func<TResult> onWordpress,
        Func<TResult> onAppexchange,
        Func<TResult> onFacebook,
        Func<TResult> onOpentable,
        Func<TResult> onDoordash,
        Func<TResult> onAngi,
        Func<TResult> onCheckatrade,
        Func<TResult> onAvvo,
        Func<TResult> onCapterra,
        Func<TResult> onApartments,
        Func<TResult> onGartner,
        Func<TResult> onHealthgrades,
        Func<TResult> onVitals,
        Func<TResult> onClasspass,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Google => onGoogle(),
            _ when this == AppStore => onAppStore(),
            _ when this == GooglePlay => onGooglePlay(),
            _ when this == JudgeMe => onJudgeMe(),
            _ when this == Trustpilot => onTrustpilot(),
            _ when this == GoogleMaps => onGoogleMaps(),
            _ when this == Yelp => onYelp(),
            _ when this == Tripadvisor => onTripadvisor(),
            _ when this == Booking => onBooking(),
            _ when this == Yotpo => onYotpo(),
            _ when this == ReviewsIo => onReviewsIo(),
            _ when this == G2 => onG2(),
            _ when this == Ebay => onEbay(),
            _ when this == Etsy => onEtsy(),
            _ when this == Steam => onSteam(),
            _ when this == Okendo => onOkendo(),
            _ when this == Feefo => onFeefo(),
            _ when this == TrustedShops => onTrustedShops(),
            _ when this == Ekomi => onEkomi(),
            _ when this == Loox => onLoox(),
            _ when this == ProvenExpert => onProvenExpert(),
            _ when this == ShopperApproved => onShopperApproved(),
            _ when this == Wordpress => onWordpress(),
            _ when this == Appexchange => onAppexchange(),
            _ when this == Facebook => onFacebook(),
            _ when this == Opentable => onOpentable(),
            _ when this == Doordash => onDoordash(),
            _ when this == Angi => onAngi(),
            _ when this == Checkatrade => onCheckatrade(),
            _ when this == Avvo => onAvvo(),
            _ when this == Capterra => onCapterra(),
            _ when this == Apartments => onApartments(),
            _ when this == Gartner => onGartner(),
            _ when this == Healthgrades => onHealthgrades(),
            _ when this == Vitals => onVitals(),
            _ when this == Classpass => onClasspass(),
            _ => otherwise(Value)
        };

    public void Match(Action onGoogle,
        Action onAppStore,
        Action onGooglePlay,
        Action onJudgeMe,
        Action onTrustpilot,
        Action onGoogleMaps,
        Action onYelp,
        Action onTripadvisor,
        Action onBooking,
        Action onYotpo,
        Action onReviewsIo,
        Action onG2,
        Action onEbay,
        Action onEtsy,
        Action onSteam,
        Action onOkendo,
        Action onFeefo,
        Action onTrustedShops,
        Action onEkomi,
        Action onLoox,
        Action onProvenExpert,
        Action onShopperApproved,
        Action onWordpress,
        Action onAppexchange,
        Action onFacebook,
        Action onOpentable,
        Action onDoordash,
        Action onAngi,
        Action onCheckatrade,
        Action onAvvo,
        Action onCapterra,
        Action onApartments,
        Action onGartner,
        Action onHealthgrades,
        Action onVitals,
        Action onClasspass,
        Action<string> otherwise)
    {
        if (this == Google) onGoogle();
        else if (this == AppStore) onAppStore();
        else if (this == GooglePlay) onGooglePlay();
        else if (this == JudgeMe) onJudgeMe();
        else if (this == Trustpilot) onTrustpilot();
        else if (this == GoogleMaps) onGoogleMaps();
        else if (this == Yelp) onYelp();
        else if (this == Tripadvisor) onTripadvisor();
        else if (this == Booking) onBooking();
        else if (this == Yotpo) onYotpo();
        else if (this == ReviewsIo) onReviewsIo();
        else if (this == G2) onG2();
        else if (this == Ebay) onEbay();
        else if (this == Etsy) onEtsy();
        else if (this == Steam) onSteam();
        else if (this == Okendo) onOkendo();
        else if (this == Feefo) onFeefo();
        else if (this == TrustedShops) onTrustedShops();
        else if (this == Ekomi) onEkomi();
        else if (this == Loox) onLoox();
        else if (this == ProvenExpert) onProvenExpert();
        else if (this == ShopperApproved) onShopperApproved();
        else if (this == Wordpress) onWordpress();
        else if (this == Appexchange) onAppexchange();
        else if (this == Facebook) onFacebook();
        else if (this == Opentable) onOpentable();
        else if (this == Doordash) onDoordash();
        else if (this == Angi) onAngi();
        else if (this == Checkatrade) onCheckatrade();
        else if (this == Avvo) onAvvo();
        else if (this == Capterra) onCapterra();
        else if (this == Apartments) onApartments();
        else if (this == Gartner) onGartner();
        else if (this == Healthgrades) onHealthgrades();
        else if (this == Vitals) onVitals();
        else if (this == Classpass) onClasspass();
        else otherwise(Value);
    }
}
