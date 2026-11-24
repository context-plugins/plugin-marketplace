using System;
using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Enum;

namespace GoogleCloudDataproc.Models.Enums;

/// <summary>
/// Optional. Kernel
/// </summary>
[JsonConverter(typeof(StringEnumConverter<Kernel>))]
public sealed record Kernel : OpenStringEnum<Kernel>
{
    private Kernel(string value) : base(value)
    {
    }

    public static readonly Kernel KernelUnspecified = new("KERNEL_UNSPECIFIED");

    public static readonly Kernel Python = new("PYTHON");

    public static readonly Kernel Scala = new("SCALA");

    public TResult Match<TResult>(Func<TResult> onKernelUnspecified,
        Func<TResult> onPython,
        Func<TResult> onScala,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == KernelUnspecified => onKernelUnspecified(),
            _ when this == Python => onPython(),
            _ when this == Scala => onScala(),
            _ => otherwise(Value)
        };

    public void Match(Action onKernelUnspecified, Action onPython, Action onScala, Action<string> otherwise)
    {
        if (this == KernelUnspecified) onKernelUnspecified();
        else if (this == Python) onPython();
        else if (this == Scala) onScala();
        else otherwise(Value);
    }
}
