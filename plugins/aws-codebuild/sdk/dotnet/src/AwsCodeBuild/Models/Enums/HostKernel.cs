using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The host operating system kernel used for on-demand builds in the build project. The host kernel does not affect the build environment operating system, which is determined by the image you specify. Valid values are: LINUX_KERNEL_4: Runs on an Amazon Linux 2 host (kernel 4.x). LINUX_KERNEL_6: Runs on an Amazon Linux 2023 host (kernel 6.x). LINUX_KERNEL_LATEST: Runs on the latest supported host kernel. This setting applies to the LINUX_CONTAINER, ARM_CONTAINER, LINUX_EC2, and ARM_EC2 environment types. It is not applicable to Windows, Lambda, or Mac environment types.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<HostKernel>))]
public sealed record HostKernel : OpenStringEnum<HostKernel>
{
    private HostKernel(string value) : base(value)
    {
    }

    public static readonly HostKernel LinuxKernel4 = new("LINUX_KERNEL_4");

    public static readonly HostKernel LinuxKernel6 = new("LINUX_KERNEL_6");

    public static readonly HostKernel LinuxKernelLatest = new("LINUX_KERNEL_LATEST");

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
