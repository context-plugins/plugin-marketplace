using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Document type
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocumentDocType>))]
public sealed record DocumentDocType : OpenStringEnum<DocumentDocType>
{
    private DocumentDocType(string value) : base(value)
    {
    }

    public static readonly DocumentDocType PersonalId = new("personal_id");

    public static readonly DocumentDocType AddressProof = new("address_proof");

    public static readonly DocumentDocType BusinessRegistration = new("business_registration");

    public static readonly DocumentDocType LetterOfIntent = new("letter_of_intent");

    public TResult Match<TResult>(Func<TResult> onPersonalId,
        Func<TResult> onAddressProof,
        Func<TResult> onBusinessRegistration,
        Func<TResult> onLetterOfIntent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PersonalId => onPersonalId(),
            _ when this == AddressProof => onAddressProof(),
            _ when this == BusinessRegistration => onBusinessRegistration(),
            _ when this == LetterOfIntent => onLetterOfIntent(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonalId,
        Action onAddressProof,
        Action onBusinessRegistration,
        Action onLetterOfIntent,
        Action<string> otherwise)
    {
        if (this == PersonalId) onPersonalId();
        else if (this == AddressProof) onAddressProof();
        else if (this == BusinessRegistration) onBusinessRegistration();
        else if (this == LetterOfIntent) onLetterOfIntent();
        else otherwise(Value);
    }
}
