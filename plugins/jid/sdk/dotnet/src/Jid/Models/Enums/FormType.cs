using System;
using System.Text.Json.Serialization;
using Jid.Core.Enum;

namespace Jid.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<FormType>))]
public sealed record FormType : OpenStringEnum<FormType>
{
    private FormType(string value) : base(value)
    {
    }

    public static readonly FormType SellerApplication = new("seller_application");

    public static readonly FormType AcquisitionInquiry = new("acquisition_inquiry");

    public static readonly FormType BuyerRegistration = new("buyer_registration");

    public static readonly FormType NdaRequest = new("nda_request");

    public static readonly FormType SourcingRequest = new("sourcing_request");

    public static readonly FormType ListingRequest = new("listing_request");

    public static readonly FormType Consultation = new("consultation");

    public static readonly FormType Partnership = new("partnership");

    public static readonly FormType Contact = new("contact");

    public static readonly FormType Other = new("other");

    public static readonly FormType VendorClaim = new("vendor_claim");

    public static readonly FormType ListingClaim = new("listing_claim");

    public static readonly FormType SponsorInquiry = new("sponsor_inquiry");

    public static readonly FormType Advertiser = new("advertiser");

    public static readonly FormType BrokerRequest = new("broker_request");

    public static readonly FormType BuyerInquiry = new("buyer_inquiry");

    public static readonly FormType SellerInquiry = new("seller_inquiry");

    public static readonly FormType DataPurchase = new("data_purchase");

    public TResult Match<TResult>(Func<TResult> onSellerApplication,
        Func<TResult> onAcquisitionInquiry,
        Func<TResult> onBuyerRegistration,
        Func<TResult> onNdaRequest,
        Func<TResult> onSourcingRequest,
        Func<TResult> onListingRequest,
        Func<TResult> onConsultation,
        Func<TResult> onPartnership,
        Func<TResult> onContact,
        Func<TResult> onOther,
        Func<TResult> onVendorClaim,
        Func<TResult> onListingClaim,
        Func<TResult> onSponsorInquiry,
        Func<TResult> onAdvertiser,
        Func<TResult> onBrokerRequest,
        Func<TResult> onBuyerInquiry,
        Func<TResult> onSellerInquiry,
        Func<TResult> onDataPurchase,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SellerApplication => onSellerApplication(),
            _ when this == AcquisitionInquiry => onAcquisitionInquiry(),
            _ when this == BuyerRegistration => onBuyerRegistration(),
            _ when this == NdaRequest => onNdaRequest(),
            _ when this == SourcingRequest => onSourcingRequest(),
            _ when this == ListingRequest => onListingRequest(),
            _ when this == Consultation => onConsultation(),
            _ when this == Partnership => onPartnership(),
            _ when this == Contact => onContact(),
            _ when this == Other => onOther(),
            _ when this == VendorClaim => onVendorClaim(),
            _ when this == ListingClaim => onListingClaim(),
            _ when this == SponsorInquiry => onSponsorInquiry(),
            _ when this == Advertiser => onAdvertiser(),
            _ when this == BrokerRequest => onBrokerRequest(),
            _ when this == BuyerInquiry => onBuyerInquiry(),
            _ when this == SellerInquiry => onSellerInquiry(),
            _ when this == DataPurchase => onDataPurchase(),
            _ => otherwise(Value)
        };

    public void Match(Action onSellerApplication,
        Action onAcquisitionInquiry,
        Action onBuyerRegistration,
        Action onNdaRequest,
        Action onSourcingRequest,
        Action onListingRequest,
        Action onConsultation,
        Action onPartnership,
        Action onContact,
        Action onOther,
        Action onVendorClaim,
        Action onListingClaim,
        Action onSponsorInquiry,
        Action onAdvertiser,
        Action onBrokerRequest,
        Action onBuyerInquiry,
        Action onSellerInquiry,
        Action onDataPurchase,
        Action<string> otherwise)
    {
        if (this == SellerApplication) onSellerApplication();
        else if (this == AcquisitionInquiry) onAcquisitionInquiry();
        else if (this == BuyerRegistration) onBuyerRegistration();
        else if (this == NdaRequest) onNdaRequest();
        else if (this == SourcingRequest) onSourcingRequest();
        else if (this == ListingRequest) onListingRequest();
        else if (this == Consultation) onConsultation();
        else if (this == Partnership) onPartnership();
        else if (this == Contact) onContact();
        else if (this == Other) onOther();
        else if (this == VendorClaim) onVendorClaim();
        else if (this == ListingClaim) onListingClaim();
        else if (this == SponsorInquiry) onSponsorInquiry();
        else if (this == Advertiser) onAdvertiser();
        else if (this == BrokerRequest) onBrokerRequest();
        else if (this == BuyerInquiry) onBuyerInquiry();
        else if (this == SellerInquiry) onSellerInquiry();
        else if (this == DataPurchase) onDataPurchase();
        else otherwise(Value);
    }
}
