using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The compute fleet overflow behavior. For overflow behavior QUEUE, your overflow builds need to wait on the existing fleet instance to become available. For overflow behavior ON_DEMAND, your overflow builds run on CodeBuild on-demand. If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<OverflowBehavior>))]
public sealed record OverflowBehavior : OpenStringEnum<OverflowBehavior>
{
    private OverflowBehavior(string value) : base(value)
    {
    }

    public static readonly OverflowBehavior Queue = new("QUEUE");

    public static readonly OverflowBehavior OnDemand = new("ON_DEMAND");

    public TResult Match<TResult>(Func<TResult> onQueue, Func<TResult> onOnDemand, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Queue => onQueue(),
            _ when this == OnDemand => onOnDemand(),
            _ => otherwise(Value)
        };

    public void Match(Action onQueue, Action onOnDemand, Action<string> otherwise)
    {
        if (this == Queue) onQueue();
        else if (this == OnDemand) onOnDemand();
        else otherwise(Value);
    }
}
