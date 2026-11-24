using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// initial, intermediate, final, or reclassification (as non-major)
/// </summary>
[JsonConverter(typeof(StringEnumConverter<KindDeliverdDevGovernanceApi>))]
public sealed record KindDeliverdDevGovernanceApi : OpenStringEnum<KindDeliverdDevGovernanceApi>
{
    private KindDeliverdDevGovernanceApi(string value) : base(value)
    {
    }

    public static readonly KindDeliverdDevGovernanceApi Initial = new("initial");

    public static readonly KindDeliverdDevGovernanceApi Intermediate = new("intermediate");

    public static readonly KindDeliverdDevGovernanceApi Final = new("final");

    public static readonly KindDeliverdDevGovernanceApi Reclassification = new("reclassification");

    public TResult Match<TResult>(Func<TResult> onInitial,
        Func<TResult> onIntermediate,
        Func<TResult> onFinal,
        Func<TResult> onReclassification,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Initial => onInitial(),
            _ when this == Intermediate => onIntermediate(),
            _ when this == Final => onFinal(),
            _ when this == Reclassification => onReclassification(),
            _ => otherwise(Value)
        };

    public void Match(Action onInitial,
        Action onIntermediate,
        Action onFinal,
        Action onReclassification,
        Action<string> otherwise)
    {
        if (this == Initial) onInitial();
        else if (this == Intermediate) onIntermediate();
        else if (this == Final) onFinal();
        else if (this == Reclassification) onReclassification();
        else otherwise(Value);
    }
}
