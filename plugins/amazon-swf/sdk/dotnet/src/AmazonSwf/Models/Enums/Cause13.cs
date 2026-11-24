using System;
using System.Text.Json.Serialization;
using AmazonSwf.Core.Enum;

namespace AmazonSwf.Models.Enums;

/// <summary>
/// The cause of the failure. To help diagnose issues, use this information to trace back the chain of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision failed because it lacked sufficient permissions. For details and example IAM policies, see Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Cause13>))]
public sealed record Cause13 : OpenStringEnum<Cause13>
{
    private Cause13(string value) : base(value)
    {
    }

    public static readonly Cause13 IdAlreadyInUse = new("ID_ALREADY_IN_USE");

    public static readonly Cause13 OpenLambdaFunctionsLimitExceeded = new("OPEN_LAMBDA_FUNCTIONS_LIMIT_EXCEEDED");

    public static readonly Cause13 LambdaFunctionCreationRateExceeded = new("LAMBDA_FUNCTION_CREATION_RATE_EXCEEDED");

    public static readonly Cause13 LambdaServiceNotAvailableInRegion = new("LAMBDA_SERVICE_NOT_AVAILABLE_IN_REGION");

    public TResult Match<TResult>(Func<TResult> onIdAlreadyInUse,
        Func<TResult> onOpenLambdaFunctionsLimitExceeded,
        Func<TResult> onLambdaFunctionCreationRateExceeded,
        Func<TResult> onLambdaServiceNotAvailableInRegion,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == IdAlreadyInUse => onIdAlreadyInUse(),
            _ when this == OpenLambdaFunctionsLimitExceeded => onOpenLambdaFunctionsLimitExceeded(),
            _ when this == LambdaFunctionCreationRateExceeded => onLambdaFunctionCreationRateExceeded(),
            _ when this == LambdaServiceNotAvailableInRegion => onLambdaServiceNotAvailableInRegion(),
            _ => otherwise(Value)
        };

    public void Match(Action onIdAlreadyInUse,
        Action onOpenLambdaFunctionsLimitExceeded,
        Action onLambdaFunctionCreationRateExceeded,
        Action onLambdaServiceNotAvailableInRegion,
        Action<string> otherwise)
    {
        if (this == IdAlreadyInUse) onIdAlreadyInUse();
        else if (this == OpenLambdaFunctionsLimitExceeded) onOpenLambdaFunctionsLimitExceeded();
        else if (this == LambdaFunctionCreationRateExceeded) onLambdaFunctionCreationRateExceeded();
        else if (this == LambdaServiceNotAvailableInRegion) onLambdaServiceNotAvailableInRegion();
        else otherwise(Value);
    }
}
