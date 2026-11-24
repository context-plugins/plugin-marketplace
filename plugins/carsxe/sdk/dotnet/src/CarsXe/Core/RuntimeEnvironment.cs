using System.Runtime.InteropServices;

namespace CarsXe.Core;

internal static class RuntimeEnvironment
{
    public static string Os { get; } = $"{RuntimeInformation.OSDescription} {RuntimeInformation.OSArchitecture}";

    public static string Runtime { get; } = RuntimeInformation.FrameworkDescription;
}
