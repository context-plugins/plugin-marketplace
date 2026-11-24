using System;
using System.Text.Json.Serialization;
using BundleSocial.Core.Enum;

namespace BundleSocial.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FieldBundleSocialMiscApi>))]
public sealed record FieldBundleSocialMiscApi : OpenStringEnum<FieldBundleSocialMiscApi>
{
    private FieldBundleSocialMiscApi(string value) : base(value)
    {
    }

    public static readonly FieldBundleSocialMiscApi Name = new("name");

    public static readonly FieldBundleSocialMiscApi LanguageCode = new("languageCode");

    public static readonly FieldBundleSocialMiscApi StoreCode = new("storeCode");

    public static readonly FieldBundleSocialMiscApi Title = new("title");

    public static readonly FieldBundleSocialMiscApi PhoneNumbers = new("phoneNumbers");

    public static readonly FieldBundleSocialMiscApi Categories = new("categories");

    public static readonly FieldBundleSocialMiscApi StorefrontAddress = new("storefrontAddress");

    public static readonly FieldBundleSocialMiscApi WebsiteUri = new("websiteUri");

    public static readonly FieldBundleSocialMiscApi RegularHours = new("regularHours");

    public static readonly FieldBundleSocialMiscApi SpecialHours = new("specialHours");

    public static readonly FieldBundleSocialMiscApi ServiceArea = new("serviceArea");

    public static readonly FieldBundleSocialMiscApi Labels = new("labels");

    public static readonly FieldBundleSocialMiscApi AdWordsLocationExtensions = new("adWordsLocationExtensions");

    public static readonly FieldBundleSocialMiscApi Latlng = new("latlng");

    public static readonly FieldBundleSocialMiscApi OpenInfo = new("openInfo");

    public static readonly FieldBundleSocialMiscApi Metadata = new("metadata");

    public static readonly FieldBundleSocialMiscApi Profile = new("profile");

    public static readonly FieldBundleSocialMiscApi RelationshipData = new("relationshipData");

    public static readonly FieldBundleSocialMiscApi MoreHours = new("moreHours");

    public static readonly FieldBundleSocialMiscApi ServiceItems = new("serviceItems");

    public TResult Match<TResult>(Func<TResult> onName,
        Func<TResult> onLanguageCode,
        Func<TResult> onStoreCode,
        Func<TResult> onTitle,
        Func<TResult> onPhoneNumbers,
        Func<TResult> onCategories,
        Func<TResult> onStorefrontAddress,
        Func<TResult> onWebsiteUri,
        Func<TResult> onRegularHours,
        Func<TResult> onSpecialHours,
        Func<TResult> onServiceArea,
        Func<TResult> onLabels,
        Func<TResult> onAdWordsLocationExtensions,
        Func<TResult> onLatlng,
        Func<TResult> onOpenInfo,
        Func<TResult> onMetadata,
        Func<TResult> onProfile,
        Func<TResult> onRelationshipData,
        Func<TResult> onMoreHours,
        Func<TResult> onServiceItems,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Name => onName(),
            _ when this == LanguageCode => onLanguageCode(),
            _ when this == StoreCode => onStoreCode(),
            _ when this == Title => onTitle(),
            _ when this == PhoneNumbers => onPhoneNumbers(),
            _ when this == Categories => onCategories(),
            _ when this == StorefrontAddress => onStorefrontAddress(),
            _ when this == WebsiteUri => onWebsiteUri(),
            _ when this == RegularHours => onRegularHours(),
            _ when this == SpecialHours => onSpecialHours(),
            _ when this == ServiceArea => onServiceArea(),
            _ when this == Labels => onLabels(),
            _ when this == AdWordsLocationExtensions => onAdWordsLocationExtensions(),
            _ when this == Latlng => onLatlng(),
            _ when this == OpenInfo => onOpenInfo(),
            _ when this == Metadata => onMetadata(),
            _ when this == Profile => onProfile(),
            _ when this == RelationshipData => onRelationshipData(),
            _ when this == MoreHours => onMoreHours(),
            _ when this == ServiceItems => onServiceItems(),
            _ => otherwise(Value)
        };

    public void Match(Action onName,
        Action onLanguageCode,
        Action onStoreCode,
        Action onTitle,
        Action onPhoneNumbers,
        Action onCategories,
        Action onStorefrontAddress,
        Action onWebsiteUri,
        Action onRegularHours,
        Action onSpecialHours,
        Action onServiceArea,
        Action onLabels,
        Action onAdWordsLocationExtensions,
        Action onLatlng,
        Action onOpenInfo,
        Action onMetadata,
        Action onProfile,
        Action onRelationshipData,
        Action onMoreHours,
        Action onServiceItems,
        Action<string> otherwise)
    {
        if (this == Name) onName();
        else if (this == LanguageCode) onLanguageCode();
        else if (this == StoreCode) onStoreCode();
        else if (this == Title) onTitle();
        else if (this == PhoneNumbers) onPhoneNumbers();
        else if (this == Categories) onCategories();
        else if (this == StorefrontAddress) onStorefrontAddress();
        else if (this == WebsiteUri) onWebsiteUri();
        else if (this == RegularHours) onRegularHours();
        else if (this == SpecialHours) onSpecialHours();
        else if (this == ServiceArea) onServiceArea();
        else if (this == Labels) onLabels();
        else if (this == AdWordsLocationExtensions) onAdWordsLocationExtensions();
        else if (this == Latlng) onLatlng();
        else if (this == OpenInfo) onOpenInfo();
        else if (this == Metadata) onMetadata();
        else if (this == Profile) onProfile();
        else if (this == RelationshipData) onRelationshipData();
        else if (this == MoreHours) onMoreHours();
        else if (this == ServiceItems) onServiceItems();
        else otherwise(Value);
    }
}
