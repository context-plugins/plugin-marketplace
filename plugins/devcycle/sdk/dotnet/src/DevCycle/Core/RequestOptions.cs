using System.Collections.Generic;
using Microsoft.Extensions.Logging;
using DevCycle.Core.Hooks;
using DevCycle.Core.Models;

namespace DevCycle.Core;

public sealed record RequestOptions
{
    public LogLevel? LogLevel { get; init; }

    public IReadOnlyList<HeaderParam>? Headers { get; init; }

    public IReadOnlyList<SdkHook>? Hooks { get; init; }
}
