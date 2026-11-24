using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

[JsonConverter(typeof(StringEnumConverter<TypeDoiTPerfectScaleForCommitmentsAwsApi>))]
public sealed record TypeDoiTPerfectScaleForCommitmentsAwsApi : OpenStringEnum<TypeDoiTPerfectScaleForCommitmentsAwsApi>
{
    private TypeDoiTPerfectScaleForCommitmentsAwsApi(string value) : base(value)
    {
    }

    public static readonly TypeDoiTPerfectScaleForCommitmentsAwsApi Compute = new("compute");

    public static readonly TypeDoiTPerfectScaleForCommitmentsAwsApi Ec2Instance = new("ec2_instance");

    public static readonly TypeDoiTPerfectScaleForCommitmentsAwsApi Sagemaker = new("sagemaker");

    public static readonly TypeDoiTPerfectScaleForCommitmentsAwsApi Database = new("database");

    public TResult Match<TResult>(Func<TResult> onCompute,
        Func<TResult> onEc2Instance,
        Func<TResult> onSagemaker,
        Func<TResult> onDatabase,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Compute => onCompute(),
            _ when this == Ec2Instance => onEc2Instance(),
            _ when this == Sagemaker => onSagemaker(),
            _ when this == Database => onDatabase(),
            _ => otherwise(Value)
        };

    public void Match(Action onCompute,
        Action onEc2Instance,
        Action onSagemaker,
        Action onDatabase,
        Action<string> otherwise)
    {
        if (this == Compute) onCompute();
        else if (this == Ec2Instance) onEc2Instance();
        else if (this == Sagemaker) onSagemaker();
        else if (this == Database) onDatabase();
        else otherwise(Value);
    }
}
