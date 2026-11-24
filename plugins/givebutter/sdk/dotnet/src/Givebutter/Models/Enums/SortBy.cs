using System;
using System.Text.Json.Serialization;
using Givebutter.Core.Enum;

namespace Givebutter.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<SortBy>))]
public sealed record SortBy : OpenStringEnum<SortBy>
{
    private SortBy(string value) : base(value)
    {
    }

    public static readonly SortBy NameOrCompany = new("name_or_company");

    public static readonly SortBy PrimaryEmail = new("primary_email");

    public static readonly SortBy PointOfContact = new("point_of_contact");

    public static readonly SortBy CreatedAt = new("created_at");

    public static readonly SortBy TotalContributions = new("total_contributions");

    public static readonly SortBy RecurringContributions = new("recurring_contributions");

    public static readonly SortBy LastDonationAmount = new("last_donation_amount");

    public TResult Match<TResult>(Func<TResult> onNameOrCompany,
        Func<TResult> onPrimaryEmail,
        Func<TResult> onPointOfContact,
        Func<TResult> onCreatedAt,
        Func<TResult> onTotalContributions,
        Func<TResult> onRecurringContributions,
        Func<TResult> onLastDonationAmount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == NameOrCompany => onNameOrCompany(),
            _ when this == PrimaryEmail => onPrimaryEmail(),
            _ when this == PointOfContact => onPointOfContact(),
            _ when this == CreatedAt => onCreatedAt(),
            _ when this == TotalContributions => onTotalContributions(),
            _ when this == RecurringContributions => onRecurringContributions(),
            _ when this == LastDonationAmount => onLastDonationAmount(),
            _ => otherwise(Value)
        };

    public void Match(Action onNameOrCompany,
        Action onPrimaryEmail,
        Action onPointOfContact,
        Action onCreatedAt,
        Action onTotalContributions,
        Action onRecurringContributions,
        Action onLastDonationAmount,
        Action<string> otherwise)
    {
        if (this == NameOrCompany) onNameOrCompany();
        else if (this == PrimaryEmail) onPrimaryEmail();
        else if (this == PointOfContact) onPointOfContact();
        else if (this == CreatedAt) onCreatedAt();
        else if (this == TotalContributions) onTotalContributions();
        else if (this == RecurringContributions) onRecurringContributions();
        else if (this == LastDonationAmount) onLastDonationAmount();
        else otherwise(Value);
    }
}
