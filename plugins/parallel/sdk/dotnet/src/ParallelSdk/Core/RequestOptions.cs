using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using ParallelSdk.Core.Hooks;
using ParallelSdk.Core.Models;

namespace ParallelSdk.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
