using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Oversight>))]
public sealed record Oversight : OpenStringEnum<Oversight>
{
    private Oversight(string value) : base(value)
    {
    }

    public static readonly Oversight None = new("none");

    public static readonly Oversight PostActionReview = new("post_action_review");

    public static readonly Oversight SampledReview = new("sampled_review");

    public static readonly Oversight HumanOnTheLoop = new("human_on_the_loop");

    public static readonly Oversight HumanInTheLoop = new("human_in_the_loop");

    public static readonly Oversight PreActionApproval = new("pre_action_approval");

    public static readonly Oversight DualApproval = new("dual_approval");

    public TResult Match<TResult>(Func<TResult> onNone,
        Func<TResult> onPostActionReview,
        Func<TResult> onSampledReview,
        Func<TResult> onHumanOnTheLoop,
        Func<TResult> onHumanInTheLoop,
        Func<TResult> onPreActionApproval,
        Func<TResult> onDualApproval,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == None => onNone(),
            _ when this == PostActionReview => onPostActionReview(),
            _ when this == SampledReview => onSampledReview(),
            _ when this == HumanOnTheLoop => onHumanOnTheLoop(),
            _ when this == HumanInTheLoop => onHumanInTheLoop(),
            _ when this == PreActionApproval => onPreActionApproval(),
            _ when this == DualApproval => onDualApproval(),
            _ => otherwise(Value)
        };

    public void Match(Action onNone,
        Action onPostActionReview,
        Action onSampledReview,
        Action onHumanOnTheLoop,
        Action onHumanInTheLoop,
        Action onPreActionApproval,
        Action onDualApproval,
        Action<string> otherwise)
    {
        if (this == None) onNone();
        else if (this == PostActionReview) onPostActionReview();
        else if (this == SampledReview) onSampledReview();
        else if (this == HumanOnTheLoop) onHumanOnTheLoop();
        else if (this == HumanInTheLoop) onHumanInTheLoop();
        else if (this == PreActionApproval) onPreActionApproval();
        else if (this == DualApproval) onDualApproval();
        else otherwise(Value);
    }
}
