using System;
using System.Text.Json.Serialization;
using Deliverd.Core.Enum;

namespace Deliverd.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<Autonomy>))]
public sealed record Autonomy : OpenStringEnum<Autonomy>
{
    private Autonomy(string value) : base(value)
    {
    }

    public static readonly Autonomy Assist = new("assist");

    public static readonly Autonomy Recommend = new("recommend");

    public static readonly Autonomy ActWithApproval = new("act_with_approval");

    public static readonly Autonomy ActAutonomously = new("act_autonomously");

    public TResult Match<TResult>(Func<TResult> onAssist,
        Func<TResult> onRecommend,
        Func<TResult> onActWithApproval,
        Func<TResult> onActAutonomously,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Assist => onAssist(),
            _ when this == Recommend => onRecommend(),
            _ when this == ActWithApproval => onActWithApproval(),
            _ when this == ActAutonomously => onActAutonomously(),
            _ => otherwise(Value)
        };

    public void Match(Action onAssist,
        Action onRecommend,
        Action onActWithApproval,
        Action onActAutonomously,
        Action<string> otherwise)
    {
        if (this == Assist) onAssist();
        else if (this == Recommend) onRecommend();
        else if (this == ActWithApproval) onActWithApproval();
        else if (this == ActAutonomously) onActAutonomously();
        else otherwise(Value);
    }
}
