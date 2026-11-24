using System;
using System.Text.Json.Serialization;
using Airtable.Core.Enum;

namespace Airtable.Models.Enums;

/// <summary>
/// The type of the field.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<TypeEnum>))]
public sealed record TypeEnum : OpenStringEnum<TypeEnum>
{
    private TypeEnum(string value) : base(value)
    {
    }

    public static readonly TypeEnum SingleLineText = new("singleLineText");

    public static readonly TypeEnum Email = new("email");

    public static readonly TypeEnum Url = new("url");

    public static readonly TypeEnum MultilineText = new("multilineText");

    public static readonly TypeEnum Number = new("number");

    public static readonly TypeEnum Percent = new("percent");

    public static readonly TypeEnum Currency = new("currency");

    public static readonly TypeEnum SingleSelect = new("singleSelect");

    public static readonly TypeEnum MultipleSelects = new("multipleSelects");

    public static readonly TypeEnum SingleCollaborator = new("singleCollaborator");

    public static readonly TypeEnum MultipleCollaborators = new("multipleCollaborators");

    public static readonly TypeEnum MultipleRecordLinks = new("multipleRecordLinks");

    public static readonly TypeEnum Date = new("date");

    public static readonly TypeEnum DateTime = new("dateTime");

    public static readonly TypeEnum PhoneNumber = new("phoneNumber");

    public static readonly TypeEnum MultipleAttachments = new("multipleAttachments");

    public static readonly TypeEnum Checkbox = new("checkbox");

    public static readonly TypeEnum Formula = new("formula");

    public static readonly TypeEnum CreatedTime = new("createdTime");

    public static readonly TypeEnum Rollup = new("rollup");

    public static readonly TypeEnum Count = new("count");

    public static readonly TypeEnum Lookup = new("lookup");

    public static readonly TypeEnum MultipleLookupValues = new("multipleLookupValues");

    public static readonly TypeEnum AutoNumber = new("autoNumber");

    public static readonly TypeEnum Barcode = new("barcode");

    public static readonly TypeEnum Rating = new("rating");

    public static readonly TypeEnum RichText = new("richText");

    public static readonly TypeEnum Duration = new("duration");

    public static readonly TypeEnum LastModifiedTime = new("lastModifiedTime");

    public static readonly TypeEnum Button = new("button");

    public static readonly TypeEnum CreatedBy = new("createdBy");

    public static readonly TypeEnum LastModifiedBy = new("lastModifiedBy");

    public static readonly TypeEnum ExternalSyncSource = new("externalSyncSource");

    public static readonly TypeEnum AiText = new("aiText");

    public TResult Match<TResult>(Func<TResult> onSingleLineText,
        Func<TResult> onEmail,
        Func<TResult> onUrl,
        Func<TResult> onMultilineText,
        Func<TResult> onNumber,
        Func<TResult> onPercent,
        Func<TResult> onCurrency,
        Func<TResult> onSingleSelect,
        Func<TResult> onMultipleSelects,
        Func<TResult> onSingleCollaborator,
        Func<TResult> onMultipleCollaborators,
        Func<TResult> onMultipleRecordLinks,
        Func<TResult> onDate,
        Func<TResult> onDateTime,
        Func<TResult> onPhoneNumber,
        Func<TResult> onMultipleAttachments,
        Func<TResult> onCheckbox,
        Func<TResult> onFormula,
        Func<TResult> onCreatedTime,
        Func<TResult> onRollup,
        Func<TResult> onCount,
        Func<TResult> onLookup,
        Func<TResult> onMultipleLookupValues,
        Func<TResult> onAutoNumber,
        Func<TResult> onBarcode,
        Func<TResult> onRating,
        Func<TResult> onRichText,
        Func<TResult> onDuration,
        Func<TResult> onLastModifiedTime,
        Func<TResult> onButton,
        Func<TResult> onCreatedBy,
        Func<TResult> onLastModifiedBy,
        Func<TResult> onExternalSyncSource,
        Func<TResult> onAiText,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == SingleLineText => onSingleLineText(),
            _ when this == Email => onEmail(),
            _ when this == Url => onUrl(),
            _ when this == MultilineText => onMultilineText(),
            _ when this == Number => onNumber(),
            _ when this == Percent => onPercent(),
            _ when this == Currency => onCurrency(),
            _ when this == SingleSelect => onSingleSelect(),
            _ when this == MultipleSelects => onMultipleSelects(),
            _ when this == SingleCollaborator => onSingleCollaborator(),
            _ when this == MultipleCollaborators => onMultipleCollaborators(),
            _ when this == MultipleRecordLinks => onMultipleRecordLinks(),
            _ when this == Date => onDate(),
            _ when this == DateTime => onDateTime(),
            _ when this == PhoneNumber => onPhoneNumber(),
            _ when this == MultipleAttachments => onMultipleAttachments(),
            _ when this == Checkbox => onCheckbox(),
            _ when this == Formula => onFormula(),
            _ when this == CreatedTime => onCreatedTime(),
            _ when this == Rollup => onRollup(),
            _ when this == Count => onCount(),
            _ when this == Lookup => onLookup(),
            _ when this == MultipleLookupValues => onMultipleLookupValues(),
            _ when this == AutoNumber => onAutoNumber(),
            _ when this == Barcode => onBarcode(),
            _ when this == Rating => onRating(),
            _ when this == RichText => onRichText(),
            _ when this == Duration => onDuration(),
            _ when this == LastModifiedTime => onLastModifiedTime(),
            _ when this == Button => onButton(),
            _ when this == CreatedBy => onCreatedBy(),
            _ when this == LastModifiedBy => onLastModifiedBy(),
            _ when this == ExternalSyncSource => onExternalSyncSource(),
            _ when this == AiText => onAiText(),
            _ => otherwise(Value)
        };

    public void Match(Action onSingleLineText,
        Action onEmail,
        Action onUrl,
        Action onMultilineText,
        Action onNumber,
        Action onPercent,
        Action onCurrency,
        Action onSingleSelect,
        Action onMultipleSelects,
        Action onSingleCollaborator,
        Action onMultipleCollaborators,
        Action onMultipleRecordLinks,
        Action onDate,
        Action onDateTime,
        Action onPhoneNumber,
        Action onMultipleAttachments,
        Action onCheckbox,
        Action onFormula,
        Action onCreatedTime,
        Action onRollup,
        Action onCount,
        Action onLookup,
        Action onMultipleLookupValues,
        Action onAutoNumber,
        Action onBarcode,
        Action onRating,
        Action onRichText,
        Action onDuration,
        Action onLastModifiedTime,
        Action onButton,
        Action onCreatedBy,
        Action onLastModifiedBy,
        Action onExternalSyncSource,
        Action onAiText,
        Action<string> otherwise)
    {
        if (this == SingleLineText) onSingleLineText();
        else if (this == Email) onEmail();
        else if (this == Url) onUrl();
        else if (this == MultilineText) onMultilineText();
        else if (this == Number) onNumber();
        else if (this == Percent) onPercent();
        else if (this == Currency) onCurrency();
        else if (this == SingleSelect) onSingleSelect();
        else if (this == MultipleSelects) onMultipleSelects();
        else if (this == SingleCollaborator) onSingleCollaborator();
        else if (this == MultipleCollaborators) onMultipleCollaborators();
        else if (this == MultipleRecordLinks) onMultipleRecordLinks();
        else if (this == Date) onDate();
        else if (this == DateTime) onDateTime();
        else if (this == PhoneNumber) onPhoneNumber();
        else if (this == MultipleAttachments) onMultipleAttachments();
        else if (this == Checkbox) onCheckbox();
        else if (this == Formula) onFormula();
        else if (this == CreatedTime) onCreatedTime();
        else if (this == Rollup) onRollup();
        else if (this == Count) onCount();
        else if (this == Lookup) onLookup();
        else if (this == MultipleLookupValues) onMultipleLookupValues();
        else if (this == AutoNumber) onAutoNumber();
        else if (this == Barcode) onBarcode();
        else if (this == Rating) onRating();
        else if (this == RichText) onRichText();
        else if (this == Duration) onDuration();
        else if (this == LastModifiedTime) onLastModifiedTime();
        else if (this == Button) onButton();
        else if (this == CreatedBy) onCreatedBy();
        else if (this == LastModifiedBy) onLastModifiedBy();
        else if (this == ExternalSyncSource) onExternalSyncSource();
        else if (this == AiText) onAiText();
        else otherwise(Value);
    }
}
