using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The host operating system kernel for this build that overrides the one specified in the build project.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HostKernelOverride>))]
public sealed record HostKernelOverride : OpenStringEnum<HostKernelOverride>
{
    private HostKernelOverride(string value) : base(value)
    {
    }

    public static readonly HostKernelOverride LinuxKernel4 = new("LINUX_KERNEL_4");

    public static readonly HostKernelOverride LinuxKernel6 = new("LINUX_KERNEL_6");

    public static readonly HostKernelOverride LinuxKernelLatest = new("LINUX_KERNEL_LATEST");

    public TResult Match<TResult>(Func<TResult> onLinuxKernel4,
        Func<TResult> onLinuxKernel6,
        Func<TResult> onLinuxKernelLatest,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == LinuxKernel4 => onLinuxKernel4(),
            _ when this == LinuxKernel6 => onLinuxKernel6(),
            _ when this == LinuxKernelLatest => onLinuxKernelLatest(),
            _ => otherwise(Value)
        };

    public void Match(Action onLinuxKernel4,
        Action onLinuxKernel6,
        Action onLinuxKernelLatest,
        Action<string> otherwise)
    {
        if (this == LinuxKernel4) onLinuxKernel4();
        else if (this == LinuxKernel6) onLinuxKernel6();
        else if (this == LinuxKernelLatest) onLinuxKernelLatest();
        else otherwise(Value);
    }
}
