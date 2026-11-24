using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

/// <summary>
/// How people oversee the AI's work
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OversightDeliverdDevTasksApi>))]
public sealed record OversightDeliverdDevTasksApi : OpenStringEnum<OversightDeliverdDevTasksApi>
{
    private OversightDeliverdDevTasksApi(string value) : base(value)
    {
    }

    public static readonly OversightDeliverdDevTasksApi None = new("none");

    public static readonly OversightDeliverdDevTasksApi PostActionReview = new("post_action_review");

    public static readonly OversightDeliverdDevTasksApi SampledReview = new("sampled_review");

    public static readonly OversightDeliverdDevTasksApi HumanOnTheLoop = new("human_on_the_loop");

    public static readonly OversightDeliverdDevTasksApi HumanInTheLoop = new("human_in_the_loop");

    public static readonly OversightDeliverdDevTasksApi PreActionApproval = new("pre_action_approval");

    public static readonly OversightDeliverdDevTasksApi DualApproval = new("dual_approval");

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
