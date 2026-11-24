using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The machine type of the instance type included in your fleet.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<MachineType>))]
public sealed record MachineType : OpenStringEnum<MachineType>
{
    private MachineType(string value) : base(value)
    {
    }

    public static readonly MachineType General = new("GENERAL");

    public static readonly MachineType Nvme = new("NVME");

    public TResult Match<TResult>(Func<TResult> onGeneral, Func<TResult> onNvme, Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == General => onGeneral(),
            _ when this == Nvme => onNvme(),
            _ => otherwise(Value)
        };

    public void Match(Action onGeneral, Action onNvme, Action<string> otherwise)
    {
        if (this == General) onGeneral();
        else if (this == Nvme) onNvme();
        else otherwise(Value);
    }
}
