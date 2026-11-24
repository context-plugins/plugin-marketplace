using System;
using System.Text.Json.Serialization;
using AwsStepFunctions.Core.Enum;

namespace AwsStepFunctions.Models.Enums;

/// <summary>
/// The input does not satisfy the constraints specified by an Amazon Web Services service.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Reason>))]
public sealed record Reason : OpenStringEnum<Reason>
{
    private Reason(string value) : base(value)
    {
    }

    public static readonly Reason ApiDoesNotSupportLabeledArns = new("API_DOES_NOT_SUPPORT_LABELED_ARNS");

    public static readonly Reason MissingRequiredParameter = new("MISSING_REQUIRED_PARAMETER");

    public static readonly Reason CannotUpdateCompletedMapRun = new("CANNOT_UPDATE_COMPLETED_MAP_RUN");

    public static readonly Reason InvalidRoutingConfiguration = new("INVALID_ROUTING_CONFIGURATION");

    public TResult Match<TResult>(Func<TResult> onApiDoesNotSupportLabeledArns,
        Func<TResult> onMissingRequiredParameter,
        Func<TResult> onCannotUpdateCompletedMapRun,
        Func<TResult> onInvalidRoutingConfiguration,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == ApiDoesNotSupportLabeledArns => onApiDoesNotSupportLabeledArns(),
            _ when this == MissingRequiredParameter => onMissingRequiredParameter(),
            _ when this == CannotUpdateCompletedMapRun => onCannotUpdateCompletedMapRun(),
            _ when this == InvalidRoutingConfiguration => onInvalidRoutingConfiguration(),
            _ => otherwise(Value)
        };

    public void Match(Action onApiDoesNotSupportLabeledArns,
        Action onMissingRequiredParameter,
        Action onCannotUpdateCompletedMapRun,
        Action onInvalidRoutingConfiguration,
        Action<string> otherwise)
    {
        if (this == ApiDoesNotSupportLabeledArns) onApiDoesNotSupportLabeledArns();
        else if (this == MissingRequiredParameter) onMissingRequiredParameter();
        else if (this == CannotUpdateCompletedMapRun) onCannotUpdateCompletedMapRun();
        else if (this == InvalidRoutingConfiguration) onInvalidRoutingConfiguration();
        else otherwise(Value);
    }
}
