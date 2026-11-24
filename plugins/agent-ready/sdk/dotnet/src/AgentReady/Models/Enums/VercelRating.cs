using System;
using System.Text.Json.Serialization;
using AgentReady.Core.Enum;

namespace AgentReady.Models.Enums;

/// <summary>
/// Coarse rating bucket derived from the Vercel Agent Readability score.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<VercelRating>))]
public sealed record VercelRating : OpenStringEnum<VercelRating>
{
    private VercelRating(string value) : base(value)
    {
    }

    public static readonly VercelRating Excellent = new("excellent");

    public static readonly VercelRating Good = new("good");

    public static readonly VercelRating Fair = new("fair");

    public static readonly VercelRating NeedsImprovement = new("needs_improvement");

    public TResult Match<TResult>(Func<TResult> onExcellent,
        Func<TResult> onGood,
        Func<TResult> onFair,
        Func<TResult> onNeedsImprovement,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Excellent => onExcellent(),
            _ when this == Good => onGood(),
            _ when this == Fair => onFair(),
            _ when this == NeedsImprovement => onNeedsImprovement(),
            _ => otherwise(Value)
        };

    public void Match(Action onExcellent,
        Action onGood,
        Action onFair,
        Action onNeedsImprovement,
        Action<string> otherwise)
    {
        if (this == Excellent) onExcellent();
        else if (this == Good) onGood();
        else if (this == Fair) onFair();
        else if (this == NeedsImprovement) onNeedsImprovement();
        else otherwise(Value);
    }
}
