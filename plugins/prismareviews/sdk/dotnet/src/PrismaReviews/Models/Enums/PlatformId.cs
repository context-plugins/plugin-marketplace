using System;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Enum;

namespace PrismaReviews.Models.Enums;

/// <summary>
/// Platform ID.
/// <para>
/// | ID | Platform | Connects with | Replies |
/// | --- | --- | --- | --- |
/// | <c>google</c> | Google Business Profile | oauth | by API |
/// | <c>app_store</c> | App Store | credentials | by API |
/// | <c>google_play</c> | Google Play | credentials | by API |
/// | <c>judge_me</c> | Judge.me | credentials | by API |
/// | <c>trustpilot</c> | Trustpilot | oauth | by API |
/// | <c>google_maps</c> | Google Maps | listing_url | read only |
/// | <c>yelp</c> | Yelp | listing_url | read only |
/// | <c>tripadvisor</c> | Tripadvisor | listing_url | read only |
/// | <c>booking</c> | Booking.com | listing_url | read only |
/// | <c>yotpo</c> | Yotpo | credentials | read only |
/// | <c>reviews_io</c> | REVIEWS.io | credentials | read only |
/// | <c>g2</c> | G2 | credentials | read only |
/// | <c>ebay</c> | eBay | oauth | by API |
/// | <c>etsy</c> | Etsy | listing_url | read only |
/// | <c>steam</c> | Steam | listing_url | read only |
/// | <c>okendo</c> | Okendo | credentials | read only |
/// | <c>feefo</c> | Feefo | credentials | read only |
/// | <c>trusted_shops</c> | Trusted Shops | credentials | by API |
/// | <c>ekomi</c> | eKomi | credentials | by API |
/// | <c>loox</c> | Loox | credentials | read only |
/// | <c>proven_expert</c> | ProvenExpert | credentials | read only |
/// | <c>shopper_approved</c> | Shopper Approved | credentials | read only |
/// | <c>wordpress</c> | WordPress.org | listing_url | read only |
/// | <c>appexchange</c> | Salesforce AppExchange | listing_url | read only |
/// | <c>facebook</c> | Facebook | listing_url | read only |
/// | <c>opentable</c> | OpenTable | listing_url | read only |
/// | <c>doordash</c> | DoorDash | listing_url | read only |
/// | <c>angi</c> | Angi | listing_url | read only |
/// | <c>checkatrade</c> | Checkatrade | listing_url | read only |
/// | <c>avvo</c> | Avvo | listing_url | read only |
/// | <c>capterra</c> | Capterra | listing_url | read only |
/// | <c>apartments</c> | Apartments.com | listing_url | read only |
/// | <c>gartner</c> | Gartner Peer Insights | listing_url | read only |
/// | <c>healthgrades</c> | Healthgrades | listing_url | read only |
/// | <c>vitals</c> | Vitals | listing_url | read only |
/// | <c>classpass</c> | ClassPass | listing_url | read only |
/// </para>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlatformId>))]
public sealed record PlatformId : OpenStringEnum<PlatformId>
{
    private PlatformId(string value) : base(value)
    {
    }

    public static readonly PlatformId Google = new("google");

    public static readonly PlatformId AppStore = new("app_store");

    public static readonly PlatformId GooglePlay = new("google_play");

    public static readonly PlatformId JudgeMe = new("judge_me");

    public static readonly PlatformId Trustpilot = new("trustpilot");

    public static readonly PlatformId GoogleMaps = new("google_maps");

    public static readonly PlatformId Yelp = new("yelp");

    public static readonly PlatformId Tripadvisor = new("tripadvisor");

    public static readonly PlatformId Booking = new("booking");

    public static readonly PlatformId Yotpo = new("yotpo");

    public static readonly PlatformId ReviewsIo = new("reviews_io");

    public static readonly PlatformId G2 = new("g2");

    public static readonly PlatformId Ebay = new("ebay");

    public static readonly PlatformId Etsy = new("etsy");

    public static readonly PlatformId Steam = new("steam");

    public static readonly PlatformId Okendo = new("okendo");

    public static readonly PlatformId Feefo = new("feefo");

    public static readonly PlatformId TrustedShops = new("trusted_shops");

    public static readonly PlatformId Ekomi = new("ekomi");

    public static readonly PlatformId Loox = new("loox");

    public static readonly PlatformId ProvenExpert = new("proven_expert");

    public static readonly PlatformId ShopperApproved = new("shopper_approved");

    public static readonly PlatformId Wordpress = new("wordpress");

    public static readonly PlatformId Appexchange = new("appexchange");

    public static readonly PlatformId Facebook = new("facebook");

    public static readonly PlatformId Opentable = new("opentable");

    public static readonly PlatformId Doordash = new("doordash");

    public static readonly PlatformId Angi = new("angi");

    public static readonly PlatformId Checkatrade = new("checkatrade");

    public static readonly PlatformId Avvo = new("avvo");

    public static readonly PlatformId Capterra = new("capterra");

    public static readonly PlatformId Apartments = new("apartments");

    public static readonly PlatformId Gartner = new("gartner");

    public static readonly PlatformId Healthgrades = new("healthgrades");

    public static readonly PlatformId Vitals = new("vitals");

    public static readonly PlatformId Classpass = new("classpass");

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
