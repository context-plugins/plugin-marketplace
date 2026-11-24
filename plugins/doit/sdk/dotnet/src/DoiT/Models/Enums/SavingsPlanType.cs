using System;
using System.Text.Json.Serialization;
using DoiT.Core.Enum;

namespace DoiT.Models.Enums;

/// <summary>
/// Savings Plan type. Values match the AWS Savings Plans API in snake_case, plus <c>database</c>.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<SavingsPlanType>))]
public sealed record SavingsPlanType : OpenStringEnum<SavingsPlanType>
{
    private SavingsPlanType(string value) : base(value)
    {
    }

    public static readonly SavingsPlanType Compute = new("compute");

    public static readonly SavingsPlanType Ec2Instance = new("ec2_instance");

    public static readonly SavingsPlanType Sagemaker = new("sagemaker");

    public static readonly SavingsPlanType Database = new("database");

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
