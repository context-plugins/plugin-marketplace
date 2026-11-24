using System;
using System.Text.Json.Serialization;
using Curlec.Core.Enum;

namespace Curlec.Models.Enums;

/// <summary>
/// Escalation stage of the dispute process.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Phase>))]
public sealed record Phase : OpenStringEnum<Phase>
{
    private Phase(string value) : base(value)
    {
    }

    public static readonly Phase Fraud = new("fraud");

    public static readonly Phase Retrieval = new("retrieval");

    public static readonly Phase Chargeback = new("chargeback");

    public static readonly Phase PreArbitration = new("pre_arbitration");

    public static readonly Phase Arbitration = new("arbitration");

    public TResult Match<TResult>(Func<TResult> onFraud,
        Func<TResult> onRetrieval,
        Func<TResult> onChargeback,
        Func<TResult> onPreArbitration,
        Func<TResult> onArbitration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Fraud => onFraud(),
            _ when this == Retrieval => onRetrieval(),
            _ when this == Chargeback => onChargeback(),
            _ when this == PreArbitration => onPreArbitration(),
            _ when this == Arbitration => onArbitration(),
            _ => otherwise(Value)
        };

    public void Match(Action onFraud,
        Action onRetrieval,
        Action onChargeback,
        Action onPreArbitration,
        Action onArbitration,
        Action<string> otherwise)
    {
        if (this == Fraud) onFraud();
        else if (this == Retrieval) onRetrieval();
        else if (this == Chargeback) onChargeback();
        else if (this == PreArbitration) onPreArbitration();
        else if (this == Arbitration) onArbitration();
        else otherwise(Value);
    }
}
