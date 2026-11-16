using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// The system-defined reason for the <c>Dispute</c>. Available values include:
/// <list type="bullet">
///   <item><description><c>CLERICAL</c>: An error occurred while processing the sale, or the cardholder has an issue with the transaction and refuses the goods.</description></item>
///   <item><description><c>FRAUD</c>: The cardholder claims they didn't approve or authorize the transaction. <c>FRAUD</c> is the primary reason disputes get created.</description></item>
///   <item><description><c>INQUIRY</c>: The issuing bank requests more information to determine if a transaction was legitimate.</description></item>
///   <item><description><c>QUALITY</c>: The cardholder has issues with the quality of the goods or services received. Reasons can include receiving damaged goods or a service that doesn't match what's promised.</description></item>
///   <item><description><c>TECHNICAL</c>: A technical issued caused the transaction to process funds incorrectly.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason Clerical = new("CLERICAL");

    public static readonly Reason Fraud = new("FRAUD");

    public static readonly Reason Inquiry = new("INQUIRY");

    public static readonly Reason Quality = new("QUALITY");

    public static readonly Reason Technical = new("TECHNICAL");

    public TResult Match<TResult>(Func<TResult> onClerical,
        Func<TResult> onFraud,
        Func<TResult> onInquiry,
        Func<TResult> onQuality,
        Func<TResult> onTechnical,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Clerical => onClerical(),
            _ when this == Fraud => onFraud(),
            _ when this == Inquiry => onInquiry(),
            _ when this == Quality => onQuality(),
            _ when this == Technical => onTechnical(),
            _ => otherwise(Value)
        };

    public void Match(Action onClerical,
        Action onFraud,
        Action onInquiry,
        Action onQuality,
        Action onTechnical,
        Action<string> otherwise)
    {
        if (this == Clerical) onClerical();
        else if (this == Fraud) onFraud();
        else if (this == Inquiry) onInquiry();
        else if (this == Quality) onQuality();
        else if (this == Technical) onTechnical();
        else otherwise(Value);
    }
}
