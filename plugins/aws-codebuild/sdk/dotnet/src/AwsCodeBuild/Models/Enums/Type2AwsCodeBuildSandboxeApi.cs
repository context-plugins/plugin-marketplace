using System;
using System.Text.Json.Serialization;
using AwsCodeBuild.Core.Enum;

namespace AwsCodeBuild.Models.Enums;

/// <summary>
/// The type of build environment to use for related builds. If you're using compute fleets during project creation, type will be ignored. For more information, see Build environment compute types in the CodeBuild user guide.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Type2AwsCodeBuildSandboxeApi>))]
public sealed record Type2AwsCodeBuildSandboxeApi : OpenStringEnum<Type2AwsCodeBuildSandboxeApi>
{
    private Type2AwsCodeBuildSandboxeApi(string value) : base(value)
    {
    }

    public static readonly Type2AwsCodeBuildSandboxeApi WindowsContainer = new("WINDOWS_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi LinuxContainer = new("LINUX_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi LinuxGpuContainer = new("LINUX_GPU_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi ArmContainer = new("ARM_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi WindowsServer2019Container = new(
        "WINDOWS_SERVER_2019_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi WindowsServer2022Container = new(
        "WINDOWS_SERVER_2022_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi LinuxLambdaContainer = new("LINUX_LAMBDA_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi ArmLambdaContainer = new("ARM_LAMBDA_CONTAINER");

    public static readonly Type2AwsCodeBuildSandboxeApi LinuxEc2 = new("LINUX_EC2");

    public static readonly Type2AwsCodeBuildSandboxeApi ArmEc2 = new("ARM_EC2");

    public static readonly Type2AwsCodeBuildSandboxeApi WindowsEc2 = new("WINDOWS_EC2");

    public static readonly Type2AwsCodeBuildSandboxeApi MacArm = new("MAC_ARM");

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
