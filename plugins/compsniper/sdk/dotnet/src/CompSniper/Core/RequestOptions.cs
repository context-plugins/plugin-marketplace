using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using CompSniper.Core.Hooks;
using CompSniper.Core.Models;

namespace CompSniper.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
