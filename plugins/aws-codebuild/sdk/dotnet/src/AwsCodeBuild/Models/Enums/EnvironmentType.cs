using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The environment type of the compute fleet. The environment type ARM_CONTAINER is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo). The environment type ARM_EC2 is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai). The environ
/// </summary>
[JsonConverter(typeof(StringEnumConverter<EnvironmentType>))]
public sealed record EnvironmentType : OpenStringEnum<EnvironmentType>
{
    private EnvironmentType(string value) : base(value)
    {
    }

    public static readonly EnvironmentType WindowsContainer = new("WINDOWS_CONTAINER");

    public static readonly EnvironmentType LinuxContainer = new("LINUX_CONTAINER");

    public static readonly EnvironmentType LinuxGpuContainer = new("LINUX_GPU_CONTAINER");

    public static readonly EnvironmentType ArmContainer = new("ARM_CONTAINER");

    public static readonly EnvironmentType WindowsServer2019Container = new("WINDOWS_SERVER_2019_CONTAINER");

    public static readonly EnvironmentType WindowsServer2022Container = new("WINDOWS_SERVER_2022_CONTAINER");

    public static readonly EnvironmentType LinuxLambdaContainer = new("LINUX_LAMBDA_CONTAINER");

    public static readonly EnvironmentType ArmLambdaContainer = new("ARM_LAMBDA_CONTAINER");

    public static readonly EnvironmentType LinuxEc2 = new("LINUX_EC2");

    public static readonly EnvironmentType ArmEc2 = new("ARM_EC2");

    public static readonly EnvironmentType WindowsEc2 = new("WINDOWS_EC2");

    public static readonly EnvironmentType MacArm = new("MAC_ARM");

    public TResult Match<TResult>(Func<TResult> onWindowsContainer,
        Func<TResult> onLinuxContainer,
        Func<TResult> onLinuxGpuContainer,
        Func<TResult> onArmContainer,
        Func<TResult> onWindowsServer2019Container,
        Func<TResult> onWindowsServer2022Container,
        Func<TResult> onLinuxLambdaContainer,
        Func<TResult> onArmLambdaContainer,
        Func<TResult> onLinuxEc2,
        Func<TResult> onArmEc2,
        Func<TResult> onWindowsEc2,
        Func<TResult> onMacArm,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == WindowsContainer => onWindowsContainer(),
            _ when this == LinuxContainer => onLinuxContainer(),
            _ when this == LinuxGpuContainer => onLinuxGpuContainer(),
            _ when this == ArmContainer => onArmContainer(),
            _ when this == WindowsServer2019Container => onWindowsServer2019Container(),
            _ when this == WindowsServer2022Container => onWindowsServer2022Container(),
            _ when this == LinuxLambdaContainer => onLinuxLambdaContainer(),
            _ when this == ArmLambdaContainer => onArmLambdaContainer(),
            _ when this == LinuxEc2 => onLinuxEc2(),
            _ when this == ArmEc2 => onArmEc2(),
            _ when this == WindowsEc2 => onWindowsEc2(),
            _ when this == MacArm => onMacArm(),
            _ => otherwise(Value)
        };

    public void Match(Action onWindowsContainer,
        Action onLinuxContainer,
        Action onLinuxGpuContainer,
        Action onArmContainer,
        Action onWindowsServer2019Container,
        Action onWindowsServer2022Container,
        Action onLinuxLambdaContainer,
        Action onArmLambdaContainer,
        Action onLinuxEc2,
        Action onArmEc2,
        Action onWindowsEc2,
        Action onMacArm,
        Action<string> otherwise)
    {
        if (this == WindowsContainer) onWindowsContainer();
        else if (this == LinuxContainer) onLinuxContainer();
        else if (this == LinuxGpuContainer) onLinuxGpuContainer();
        else if (this == ArmContainer) onArmContainer();
        else if (this == WindowsServer2019Container) onWindowsServer2019Container();
        else if (this == WindowsServer2022Container) onWindowsServer2022Container();
        else if (this == LinuxLambdaContainer) onLinuxLambdaContainer();
        else if (this == ArmLambdaContainer) onArmLambdaContainer();
        else if (this == LinuxEc2) onLinuxEc2();
        else if (this == ArmEc2) onArmEc2();
        else if (this == WindowsEc2) onWindowsEc2();
        else if (this == MacArm) onMacArm();
        else otherwise(Value);
    }
}
