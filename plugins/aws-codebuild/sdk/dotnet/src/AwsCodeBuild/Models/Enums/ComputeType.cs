using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// Information about the compute resources the docker server uses. Available values include: BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for your docker server. BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for your docker server. BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for your docker server. BUILD_GENERAL1_XLARGE: Use up to 64 GiB memory and 32 vCPUs for your docker server. BUILD_GENERAL1_2XLARGE: Use up to 128 GiB memory and 64 vCPUs for your docker server.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<ComputeType>))]
public sealed record ComputeType : OpenStringEnum<ComputeType>
{
    private ComputeType(string value) : base(value)
    {
    }

    public static readonly ComputeType BuildGeneral1Small = new("BUILD_GENERAL1_SMALL");

    public static readonly ComputeType BuildGeneral1Medium = new("BUILD_GENERAL1_MEDIUM");

    public static readonly ComputeType BuildGeneral1Large = new("BUILD_GENERAL1_LARGE");

    public static readonly ComputeType BuildGeneral1Xlarge = new("BUILD_GENERAL1_XLARGE");

    public static readonly ComputeType BuildGeneral12Xlarge = new("BUILD_GENERAL1_2XLARGE");

    public static readonly ComputeType BuildLambda1Gb = new("BUILD_LAMBDA_1GB");

    public static readonly ComputeType BuildLambda2Gb = new("BUILD_LAMBDA_2GB");

    public static readonly ComputeType BuildLambda4Gb = new("BUILD_LAMBDA_4GB");

    public static readonly ComputeType BuildLambda8Gb = new("BUILD_LAMBDA_8GB");

    public static readonly ComputeType BuildLambda10Gb = new("BUILD_LAMBDA_10GB");

    public static readonly ComputeType AttributeBasedCompute = new("ATTRIBUTE_BASED_COMPUTE");

    public static readonly ComputeType CustomInstanceType = new("CUSTOM_INSTANCE_TYPE");

    public TResult Match<TResult>(Func<TResult> onBuildGeneral1Small,
        Func<TResult> onBuildGeneral1Medium,
        Func<TResult> onBuildGeneral1Large,
        Func<TResult> onBuildGeneral1Xlarge,
        Func<TResult> onBuildGeneral12Xlarge,
        Func<TResult> onBuildLambda1Gb,
        Func<TResult> onBuildLambda2Gb,
        Func<TResult> onBuildLambda4Gb,
        Func<TResult> onBuildLambda8Gb,
        Func<TResult> onBuildLambda10Gb,
        Func<TResult> onAttributeBasedCompute,
        Func<TResult> onCustomInstanceType,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == BuildGeneral1Small => onBuildGeneral1Small(),
            _ when this == BuildGeneral1Medium => onBuildGeneral1Medium(),
            _ when this == BuildGeneral1Large => onBuildGeneral1Large(),
            _ when this == BuildGeneral1Xlarge => onBuildGeneral1Xlarge(),
            _ when this == BuildGeneral12Xlarge => onBuildGeneral12Xlarge(),
            _ when this == BuildLambda1Gb => onBuildLambda1Gb(),
            _ when this == BuildLambda2Gb => onBuildLambda2Gb(),
            _ when this == BuildLambda4Gb => onBuildLambda4Gb(),
            _ when this == BuildLambda8Gb => onBuildLambda8Gb(),
            _ when this == BuildLambda10Gb => onBuildLambda10Gb(),
            _ when this == AttributeBasedCompute => onAttributeBasedCompute(),
            _ when this == CustomInstanceType => onCustomInstanceType(),
            _ => otherwise(Value)
        };

    public void Match(Action onBuildGeneral1Small,
        Action onBuildGeneral1Medium,
        Action onBuildGeneral1Large,
        Action onBuildGeneral1Xlarge,
        Action onBuildGeneral12Xlarge,
        Action onBuildLambda1Gb,
        Action onBuildLambda2Gb,
        Action onBuildLambda4Gb,
        Action onBuildLambda8Gb,
        Action onBuildLambda10Gb,
        Action onAttributeBasedCompute,
        Action onCustomInstanceType,
        Action<string> otherwise)
    {
        if (this == BuildGeneral1Small) onBuildGeneral1Small();
        else if (this == BuildGeneral1Medium) onBuildGeneral1Medium();
        else if (this == BuildGeneral1Large) onBuildGeneral1Large();
        else if (this == BuildGeneral1Xlarge) onBuildGeneral1Xlarge();
        else if (this == BuildGeneral12Xlarge) onBuildGeneral12Xlarge();
        else if (this == BuildLambda1Gb) onBuildLambda1Gb();
        else if (this == BuildLambda2Gb) onBuildLambda2Gb();
        else if (this == BuildLambda4Gb) onBuildLambda4Gb();
        else if (this == BuildLambda8Gb) onBuildLambda8Gb();
        else if (this == BuildLambda10Gb) onBuildLambda10Gb();
        else if (this == AttributeBasedCompute) onAttributeBasedCompute();
        else if (this == CustomInstanceType) onCustomInstanceType();
        else otherwise(Value);
    }
}
