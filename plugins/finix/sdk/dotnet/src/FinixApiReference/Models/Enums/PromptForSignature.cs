using System;
using System.Text.Json.Serialization;
using FinixApiReference.Core.Enum;

namespace FinixApiReference.Models.Enums;

/// <summary>
/// Determines when the terminal prompts for an e-signature.
/// <list type="bullet">
///   <item><description><c>ALWAYS</c>: The terminal will always request an e-signature.</description></item>
///   <item><description><c>NEVER</c>: The terminal will never request an e-signature.</description></item>
///   <item><description><c>ON_NETWORK_RECOMMENDATION</c>: The terminal follows card network recommendations on whether to prompt for a signature.</description></item>
///   <item><description><c>ON_THRESHOLD_AMOUNT</c>: The terminal requests an e-signature only when the transaction amount is greater than or equal to <c>signature_threshold_amount</c>.</description></item>
/// </list>
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PromptForSignature>))]
public sealed record PromptForSignature : OpenStringEnum<PromptForSignature>
{
    private PromptForSignature(string value) : base(value)
    {
    }

    public static readonly PromptForSignature Always = new("ALWAYS");

    public static readonly PromptForSignature Never = new("NEVER");

    public static readonly PromptForSignature OnNetworkRecommendation = new("ON_NETWORK_RECOMMENDATION");

    public static readonly PromptForSignature OnThresholdAmount = new("ON_THRESHOLD_AMOUNT");

    public TResult Match<TResult>(Func<TResult> onAlways,
        Func<TResult> onNever,
        Func<TResult> onOnNetworkRecommendation,
        Func<TResult> onOnThresholdAmount,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Always => onAlways(),
            _ when this == Never => onNever(),
            _ when this == OnNetworkRecommendation => onOnNetworkRecommendation(),
            _ when this == OnThresholdAmount => onOnThresholdAmount(),
            _ => otherwise(Value)
        };

    public void Match(Action onAlways,
        Action onNever,
        Action onOnNetworkRecommendation,
        Action onOnThresholdAmount,
        Action<string> otherwise)
    {
        if (this == Always) onAlways();
        else if (this == Never) onNever();
        else if (this == OnNetworkRecommendation) onOnNetworkRecommendation();
        else if (this == OnThresholdAmount) onOnThresholdAmount();
        else otherwise(Value);
    }
}
