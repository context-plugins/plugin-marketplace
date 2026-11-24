using System;
using System.Text.Json.Serialization;
using DidLogic.Core.Enum;

namespace DidLogic.Models.Enums;

/// <summary>
/// Document type identifier
/// </summary>
[JsonConverter(typeof(StringEnumConverter<DocType>))]
public sealed record DocType : OpenStringEnum<DocType>
{
    private DocType(string value) : base(value)
    {
    }

    public static readonly DocType PersonalId = new("Personal ID");

    public static readonly DocType ProofOfAddress = new("Proof of address");

    public static readonly DocType BusinessRegistration = new("Business Registration");

    public static readonly DocType LetterOfIntent = new("Letter of Intent");

    public TResult Match<TResult>(Func<TResult> onPersonalId,
        Func<TResult> onProofOfAddress,
        Func<TResult> onBusinessRegistration,
        Func<TResult> onLetterOfIntent,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == PersonalId => onPersonalId(),
            _ when this == ProofOfAddress => onProofOfAddress(),
            _ when this == BusinessRegistration => onBusinessRegistration(),
            _ when this == LetterOfIntent => onLetterOfIntent(),
            _ => otherwise(Value)
        };

    public void Match(Action onPersonalId,
        Action onProofOfAddress,
        Action onBusinessRegistration,
        Action onLetterOfIntent,
        Action<string> otherwise)
    {
        if (this == PersonalId) onPersonalId();
        else if (this == ProofOfAddress) onProofOfAddress();
        else if (this == BusinessRegistration) onBusinessRegistration();
        else if (this == LetterOfIntent) onLetterOfIntent();
        else otherwise(Value);
    }
}
